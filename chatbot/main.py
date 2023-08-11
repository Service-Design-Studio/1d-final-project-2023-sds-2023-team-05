import vertexai
import os
from vertexai.preview.language_models import ChatModel, InputOutputTextPair
from flask import Flask, request, jsonify
from flask_cors import CORS

vertexai.init(project="faqapi", location="us-central1")
chat_model = ChatModel.from_pretrained("chat-bison@001")
parameters = {
    "temperature": 0.2,
    "max_output_tokens": 256,
    "top_p": 0.8,
    "top_k": 40
}
chat = chat_model.start_chat(
    context="""You are a respectful, interfaith focused chatbot called Kampung Kaki. You only answer questions pertaining to faith. Keep your answers simple, unbiased, concise and respectful. Your answers should be short and to the point.""",
)



app = Flask(__name__)
CORS(app)

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

    retrieved_data = request.get_json()
    input_message = retrieved_data.get('question')

    res = chat.send_message(input_message, **parameters)
    return jsonify({'ai_response': res.text})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))