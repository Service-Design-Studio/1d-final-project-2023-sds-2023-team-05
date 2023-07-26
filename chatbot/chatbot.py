import os
# from dotenv import load_dotenv
from redis import Redis
import json
import vertexai
from vertexai.preview.language_models import ChatModel, InputOutputTextPair, ChatSession, ChatMessage


# load environment variable
# load_dotenv()


class Chatbot:
    def __init__(self):
        vertexai.init(project="chatbotapiid")
        self.chat_model = ChatModel.from_pretrained("chat-bison@001")
        self.context = (
            "You are a respectful, interfaith focus chatbot called Kampong Kaki. "
            "You can only answer questions pertaining to faith. "
            "If you do not know how to answer a question, just say you do not know or you do not understand. Never repeat your answers. "
            "If you derive at the same answer, rephrase it in a simpler way. "
        )
        self.examples = [
            InputOutputTextPair(
                input_text="""what is python?""",
                output_text=(
                    "Sorry, I am not able to help with that. I am an interfaith focus chatbot. "
                    "Please ask a question related to faith."
                )
            ),
            InputOutputTextPair(
                input_text="""what is ewgwegwesngi""",
                output_text=(
                    "I am not sure what you mean by that. "
                    "Please flag this question so that your trainer can review it and get back to you."
                )
            ),
            InputOutputTextPair(
                input_text="""i dont understand""",
                output_text="""I'm sorry you don't understand. can you explain which part of it do you not understand? """
            ),
            InputOutputTextPair(
                input_text="""i still do not understand""",
                output_text="""I apologize if my explanation was too complicated. This is a simpler version of it: {}"""
            ),
            InputOutputTextPair(
                input_text="""I still really cannot understand""",
                output_text=(
                    "I'm sorry I can't seem to explain it in a way that you understand. "
                    "Please flag this question so that your trainer can review it and get back to you."
                )
            ),
        ]
        self.temperature = 0.2
        self.max_output_tokens = 1024
        self.top_p = 0.8
        self.top_k = 40

    def get_chat(self):
        return SerializableChat(
            context=self.context,
            examples=self.examples,
            message_history=[],
        )

    def run(self, input):
        chat_session = self.chat_model.start_chat(
            # context=serializable_chat.context,
            # examples=serializable_chat.examples,
            temperature=self.temperature,
            max_output_tokens=self.max_output_tokens,
            top_p=self.top_p,
            top_k=self.top_k,
            # message_history=serializable_chat.message_history,
        )
        response = chat_session.send_message(input)
        # serializable_chat.message_history.append(ChatMessage(author='user', content=input))
        # serializable_chat.message_history.append(ChatMessage(author='assistant', content=response.text))
        return response.text

    @staticmethod
    def serialize_chat(chat):
        return json.dumps({
            "context": chat.context,
            "examples": [(io.input_text, io.output_text) for io in chat.examples] if chat.examples else None,
            "message_history": [{"role": msg.author, "content": msg.content} for msg in chat.message_history],
        })

    @staticmethod
    def deserialize_chat(chat_json):
        chat_data = json.loads(chat_json)
        print(chat_data["message_history"])  # debug line
        examples = [InputOutputTextPair(input_text=i, output_text=o)
                    for i, o in chat_data["examples"]] if chat_data["examples"] else []
        message_history = []
        for msg in chat_data["message_history"]:
            role = msg['role']
            if role == 'bot':
                role = 'assistant'
            message_history.append(ChatMessage(
                content=msg['content'], author=role))
        return SerializableChat(
            context=chat_data.get("context", None),
            examples=examples,
            message_history=message_history,
        )


class SerializableChat:
    def __init__(self, context, examples, message_history):
        self.context = context
        self.examples = examples
        self.message_history = message_history
