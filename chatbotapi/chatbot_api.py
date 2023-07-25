from flask import Flask, request, jsonify
from flask_cors import CORS
import chatbot
from redis import Redis

app = Flask(__name__)
CORS(app)

# specify which Redis database to refer to
redis_db = Redis(host='localhost', port=6379, db=0)

@app.route('/chatbot/query', methods=['POST'])
def query():
    retrieved_data = request.get_json()
    input_message = retrieved_data.get('question')
    session_id = retrieved_data.get('session_id')

    if not session_id:
        return jsonify({'error': 'No session_id provided'}), 400
    
    # Load the chat object from Redis, if it exists. Otherwise, create a new one
    chat_json = redis_db.get(session_id)
    chatbot_instance = chatbot.Chatbot()

    if chat_json is None:
        chat_instance = chatbot_instance.get_chat()
    else:
        chat_instance = chatbot_instance.deserialize_chat(chat_json.decode())

    # After sending message and getting response, serialize the updated chat instance
    ai_response = chatbot_instance.run(chat_instance, input_message)
    redis_db.set(session_id, chatbot_instance.serialize_chat(chat_instance))

    json_response = {'ai_response': ai_response}
    return jsonify(json_response)

@app.route('/chatbot/reset', methods=['POST'])
def reset():
        retrieved_data = request.get_json()
        session_id = retrieved_data.get('session_id')

        if not session_id:
             return jsonify({'error': 'No session_id provided'}), 400
        
        # Delete the chat instance associated with the session_id from Redis
        redis_db.delete(session_id)

        return jsonify({'status': 'chatbot memory id: ' + session_id + ' has been successfully deleted'}), 200
    

@app.route('/chatbot/resetall', methods=['POST'])
def reset_all():
        redis_db.flushall()
        return jsonify({'status':'all memory has been succesfully deleted'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0')
