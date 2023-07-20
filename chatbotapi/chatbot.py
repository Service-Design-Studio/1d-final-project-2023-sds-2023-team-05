import os
from dotenv import load_dotenv
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain

# load environment variable
load_dotenv()

llm = ChatOpenAI(temperature = 0.3, model_name = 'gpt-3.5-turbo')

convoChain = ConversationChain(llm = llm)
    
def run(input):
    ai_response = convoChain.predict(input = input)
    return ai_response

def newChatbot():
    global convoChain
    convoChain = ConversationChain(llm = ChatOpenAI(temperature = 0.3, model_name = 'gpt-3.5-turbo'))


    





