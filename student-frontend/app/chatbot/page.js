'use client';

import Chatbotheader from '@/components/chatbot-header';
import { API_URL, CHATBOT_URL } from '@/config';
import styles from '@/styles/chatbot.module.css';
import { useEffect, useState } from 'react';
import Modal from '@/components/modal';

async function fetchBotResponse(question) {
  // const res = await fetch(`${CHATBOT_URL}`, {
  //   body: JSON.stringify({
  //     question: question,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  // });

  // if (!res.ok) {
  //   alert('Error...');
  // }

  // const data = await res.json();

  // return data.ai_response;
  return 'Dummy Response'
}

async function flagComment(id) {
  const res = await fetch(`${API_URL}/chats/${id}`, {
    body: JSON.stringify({
      flagged: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });

  if (!res.ok) {
    alert('Error...');
  }
}

async function sendChatToBackend(question, answer, id) {
  const res = await fetch(`${API_URL}/chats`, {
    body: JSON.stringify({
      question: question,
      answer: answer,
      id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (!res.ok) {
    alert('Error...');
  }

  const data = await res.json();

  return data.ai_response;
}

function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageId, setMessageId] = useState('');

  const handleOpenModal = (id) => {
    setIsModalOpen(true);
    setMessageId(id)
    document.body.style.overflow = 'hidden';

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';

  };

  useEffect(() => {
    // Simulate delay for the first default message
    const initialMessage = {
      content: 'Ask me anything!',
      sender: 'bot',
    };

    const timer = setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, initialMessage]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        content: inputValue,
        sender: 'user',
      };

      const content = await fetchBotResponse(inputValue.trim());

      // Send the message to the server or process it locally
      // You can simulate a response from the chat bot for testing purposes
      //   const botResponse = {
      //     content: 'This is a bot response.',
      //     sender: 'bot',
      //   };

      const id = Date.now();

      const botResponse = {
        content: content,
        sender: 'bot',
        id: id,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, botResponse]);
      setInputValue('');

      // generate id to send into backend
      // const id = Date.now()
      sendChatToBackend(inputValue.trim(), content, id);
    }
  };

  return (
    <div>
      <Chatbotheader />

      <div className={styles['chat-container']}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[message.sender]} ${index === messages.length - 1 ? styles.fadeIn : ''
                }`}
            >
              {message.sender === 'bot' && (
                <>
                  <div className={styles.avatar}></div>
                </>
              )}
              <div className={`${styles.messageContent} promptAnswer`}>
                {message.content}
              </div>
              {message.id && (
                <>
                  <button className={`${styles.flaggingIcon}`} onClick={() => handleOpenModal(message.id)}>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        <div className={styles['user-input']}>
          <input
            type="text"
            id="chatbot-prompt"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className={styles.input}
          />
          <button
            id="send-button"
            onClick={handleSendMessage}
            className={styles.button}
          >
            Send
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} messageId={messageId} setIsModalOpen={setIsModalOpen} API_URL={API_URL} />
      </div>
    </div>
  );
}

export default ChatBotPage;
