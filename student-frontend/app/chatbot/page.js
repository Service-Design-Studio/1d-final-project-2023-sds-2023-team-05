'use client';

import Chatbotheader from '@/components/chatbot-header';
import styles from '@/styles/chatbot.module.css';
import { useEffect, useState } from 'react';

function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        content: inputValue,
        sender: 'user',
      };

      // Send the message to the server or process it locally
      // You can simulate a response from the chat bot for testing purposes
      const botResponse = {
        content: 'This is a bot response.',
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, botResponse]);
      setInputValue('');
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
              className={`${styles.message} ${styles[message.sender]} ${
                index === messages.length - 1 ? styles.fadeIn : ''
              }`}
            >
              {message.sender === 'bot' && (
                <div className={styles.avatar}></div>
              )}
              <div className={styles.messageContent}>{message.content}</div>
            </div>
          ))}
        </div>

        <div className={styles['user-input']}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className={styles.input}
          />
          <button onClick={handleSendMessage} className={styles.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
