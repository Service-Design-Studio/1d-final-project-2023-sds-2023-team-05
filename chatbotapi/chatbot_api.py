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

    # returns response and stores input/output in Redis database
    chatbotI = chatbot.Chatbot()
    agent = chatbotI.get_agent(session_id, "0")
    ai_response = agent.run(input = input_message)
    json_response = {'ai_response': ai_response}
    return jsonify(json_response)


@app.route('/chatbot/reset', methods=['POST'])
def reset():
        retrieved_data = request.get_json()
        session_id = retrieved_data.get('session_id')

        if not session_id:
             return jsonify({'error': 'No session_id provided'}), 400
        
        chatbotI = chatbot.Chatbot()
        agent = chatbotI.get_agent(session_id, "0")
        chatbotI.delete_memory(session_id, "0", agent)

        return jsonify({'status': 'chatbot memory id ' + session_id + ' has been successfully deleted'}), 200
    

@app.route('/chatbot/resetall', methods=['POST'])
def reset_all():
        redis_db.flushall()
        return jsonify({'status':'all memory has been succesfully deleted'}), 200



if __name__ == '__main__':
    app.run(host='0.0.0.0')

