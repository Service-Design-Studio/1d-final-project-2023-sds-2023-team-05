import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
from vertexai.preview.language_models import ChatModel, InputOutputTextPair
import vertexai

# load environment variable
load_dotenv()

# change your project id here
vertexai.init(project="chatbotapiid", location="us-central1")
parameters = {
    "temperature": 0.2,
    "max_output_tokens": 256,
    "top_p": 0.8,
    "top_k": 40
}
chat_model = ChatModel.from_pretrained("chat-bison@001")
context="You are a respectful, interfaith focused chatbot called Kampung Kaki. You can only answer questions pertaining to faith. Keep your answers simple, unbiased, concise and respectful. Your answers should be short and to the point."


app = Flask(__name__)
# load the correct env variable
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SDU']
db = SQLAlchemy(app)
CORS(app)


class Example(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    input_text = db.Column(db.Text, nullable=False)
    output_text = db.Column(db.Text, nullable=False)


with app.app_context():
    db.create_all()


@app.route("/chatbot/query", methods=['POST'])
def query():
    # Check if the input is JSON
    if not request.is_json:
        return jsonify({'error': 'Invalid input'}), 400

    # Check if the 'question' field is present and is a string
    retrieved_data = request.get_json()
    if 'question' not in retrieved_data or not isinstance(retrieved_data['question'], str):
        return jsonify({'error': 'Invalid input'}), 400

    # Check if the 'question' field is empty
    input_message = retrieved_data.get('question')
    if input_message.strip() == '':
        return jsonify({'error': 'Invalid input'}), 400

    examples = get_examples()
    chat = chat_model.start_chat(
        context=context,
        examples=examples
    )
    
    retrieved_data = request.get_json()
    input_message = retrieved_data.get('question')

    res = chat.send_message(input_message, **parameters)
    return jsonify({'ai_response': res.text})


@app.route("/chatbot/retrain", methods=['POST'])
def retrain():
    retrieved_data = request.get_json()
    input_text = retrieved_data.get('question')
    output_text = retrieved_data.get('output')
    new_example = Example(input_text=input_text, output_text=output_text)
    db.session.add(new_example)
    db.session.commit()
    return jsonify({'status': 'Your chatbot has been retrained'}), 200


def get_examples():
    examples = []
    db_examples = Example.query.all()
    for db_example in db_examples:
        pair = InputOutputTextPair(
            input_text=db_example.input_text,
            output_text=db_example.output_text
        )
        examples.append(pair)
        # debug line
        # print(f"Input: {pair.input_text}, Output: {pair.output_text}")
    return examples


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))

