import os
from dotenv import load_dotenv
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.chat_models import ChatVertexAI

# load environment variable
load_dotenv()

llm = ChatVertexAI()

convoChain = ConversationChain(llm = llm)
    
def run(input):
    ai_response = convoChain.predict(input = input)
    return ai_response

def newChatbot():
    global convoChain
    convoChain = ConversationChain(llm = llm)


    







