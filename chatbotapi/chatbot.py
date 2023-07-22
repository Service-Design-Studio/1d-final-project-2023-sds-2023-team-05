import os
from dotenv import load_dotenv
from langchain.chains import ConversationChain
from langchain.chat_models import ChatVertexAI
from langchain.llms import VertexAI

# load environment variable
load_dotenv()

llm = VertexAI()

convoChain = ConversationChain(llm = llm)
    
def run(input):
    ai_response = convoChain.predict(input = input)
    return ai_response

def newChatbot():
    global convoChain
    convoChain = ConversationChain(llm = llm)


    







