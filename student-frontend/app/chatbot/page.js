'use client';
import Chatbotheader from '@/components/chatbot-header';
import Modal from '@/components/modal';
import ThxModal from '@/components/thxmodal';
import { API_URL, CHATBOT_URL } from '@/config';
import styles from '@/styles/chatbot.module.css';
import { useEffect, useState, useRef } from 'react';

async function fetchBotResponse(question) {
	const res = await fetch(`${CHATBOT_URL}/chatbot/query`, {
		body: JSON.stringify({
			question: question,
			// session_id: '123456789',
			session_id: Date.now(),
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
	// return ('Dummy Response!')
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
		console.log('Error...');
	}
}

function ChatBotPage() {
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const [messageId, setMessageId] = useState('');
	const [flaggedQuestions, setFlaggedQuestions] = useState([]);

	const handleOpenModal = (id) => {
		setIsModalOpen(true);
		setMessageId(id);
		document.body.style.overflow = 'hidden';
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'auto';
	};

	const handleCloseModal2 = () => {
		setIsModalOpen2(false)
		document.body.style.overflow = 'auto';
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleSendMessage();
		}
	};

	const chatContainerRef = useRef(null);

	// Scroll to the bottom of the chat container when new messages are received
	useEffect(() => {
		chatContainerRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	useEffect(() => {
		// Simulate delay for the first default message
		const initialMessage = {
			content: 'Ask me anything!',
			sender: 'bot',
		};
		const flaggingMessage = {
			content: 'If you see any inappropriate responses, please press the flag icon beside an answer to let us know!',
			sender: 'bot',
		};

		const timer = setTimeout(() => {
			setMessages((prevMessages) => [...prevMessages, initialMessage, flaggingMessage]);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const isMessageFlagged = (messageId) => {
		return flaggedQuestions.includes(messageId);
	};

	const handleSendMessage = async () => {
		if (inputValue.trim() !== '') {
			const newMessage = {
				content: inputValue,
				sender: 'user',
			};

			// yy add here
			setMessages((prevMessages) => [...prevMessages, newMessage]);
			setInputValue('');
			//

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

			setMessages((prevMessages) => [...prevMessages, botResponse]);
			setInputValue('')


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
								}`}>
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
									<button
										className={`${isMessageFlagged(message.id)
											? styles.flaggingIconFlagged
											: styles.flaggingIcon + ' flagButton'
											}`}
										onClick={
											flaggedQuestions.includes(message.id)
												? null
												: () => handleOpenModal(message.id)
										}></button>
								</>
							)}
						</div>
					))}
					<div ref={chatContainerRef}	></div>
				</div>

				<div className={styles['user-input']}>
					<textarea
						type='text'
						id='chatbot-prompt'
						value={inputValue}
						onChange={handleInputChange}
						placeholder='Type your message...'
						className={styles.input}
						onKeyDown={handleKeyDown}
					/>
					<button
						id='send-button'
						onClick={handleSendMessage}
						className={styles.button}>
						Send
					</button>
				</div>
				<Modal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					messageId={messageId}
					setIsModalOpen={setIsModalOpen}
					API_URL={API_URL}
					setFlaggedQuestions={setFlaggedQuestions}
					setIsModalOpen2={setIsModalOpen2}
				/>
				<ThxModal
					isOpen={isModalOpen2}
					onClose={handleCloseModal2}
					messageId={messageId}
					setIsModalOpen={setIsModalOpen2}
				/>
			</div>
		</div>
	);
}

export default ChatBotPage;
