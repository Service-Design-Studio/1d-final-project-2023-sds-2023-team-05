import os
from dotenv import load_dotenv
from langchain.chains import ConversationChain
from langchain.chat_models import ChatVertexAI
from langchain.llms import VertexAI
from langchain.chat_models import ChatOpenAI
from langchain import LLMChain
from langchain.agents import ZeroShotAgent, Tool, AgentExecutor
from langchain.memory import ConversationBufferMemory
from langchain.memory.chat_memory import ChatMessageHistory
from langchain.memory.chat_message_histories import RedisChatMessageHistory
from langchain.utilities import GoogleSearchAPIWrapper
from langchain.agents import AgentType
from langchain.agents import initialize_agent
from redis import Redis



# load environment variable
load_dotenv()


class Tools:
    search = GoogleSearchAPIWrapper()
    tools = [
        Tool(
            name="Search",
            func=search.run,
            description="useful for when you need to answer questions about current events",
        )
    ]


class Chatbot:
    llm = VertexAI(max_output_tokens=1024)

    def get_agent(self, session_id, db):
        # establish connection to Redis database, ttl is expire time in secs
        message_history = RedisChatMessageHistory(
            url = f"redis://localhost:6379/{db}", ttl=3600, session_id=session_id,
        )

        # store it in conversation memory
        memory = ConversationBufferMemory(
            memory_key="chat_history", chat_memory=message_history
        )

        # load conversation agent
        agent = initialize_agent(tools=Tools.tools, llm=Chatbot.llm, agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION, verbose=True,
                                 memory=memory, handle_parsing_errors=True)

        return agent


    def delete_memory(self, session_id, db, agent_chain):
        # clear agent's buffer memory
        agent_chain.memory.clear()

        # clear database's memory
        redis_db = Redis(host='localhost', port=6379, db=db)
        redis_db.delete(session_id)



# test run in terminal
# chatbot = Chatbot()
# agent = chatbot.get_agent("test", "0")

# run loop
# print("Assistant:\n Hi, how can I help you?")
# while True:
#     user_input = input("> ")
#     print("Assistant:\n" + agent.run(input = user_input))

# reset memory
# chatbot.delete_memory("test", "0", agent)

# reset all memory
# redis_db = Redis(host='localhost', port=6379)
# redis_db.flushall()







