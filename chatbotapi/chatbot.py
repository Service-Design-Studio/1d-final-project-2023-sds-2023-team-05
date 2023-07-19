import os
import constants
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain

# set environment variable
os.environ["OPENAI_API_KEY"] = constants.API_KEY


convoChain = ConversationChain(llm = ChatOpenAI(temperature = 0.3, model_name = 'gpt-3.5-turbo'))
    
def run(input):
    ai_response = convoChain.predict(input = input)
    return ai_response

def newChatbot():
    global convoChain
    convoChain = ConversationChain(llm = ChatOpenAI(temperature = 0.3, model_name = 'gpt-3.5-turbo'))


    





