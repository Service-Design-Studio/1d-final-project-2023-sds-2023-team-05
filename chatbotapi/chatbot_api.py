from flask import Flask, request, jsonify
from flask_cors import CORS
import chatbot

app = Flask(__name__)
CORS(app)

@app.route('/chatbot/api', methods=['POST'])
def chat_api():
    input_message = request.get_json().get("question")
    ai_response = chatbot.run(input_message)
    response = {'ai_response': ai_response}
    return jsonify(response)

@app.route('/chatbot/reset', methods=['POST'])
def reset_conversation():
    if request.method == 'OPTIONS':
        # Preflight request. Reply successfully:
        return jsonify({'status':'success'}), 200
    elif request.method == 'POST':
        # Reset the conversation memory here
        chatbot.newChatbot()
        return jsonify({'status':'success'}), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0')
    

