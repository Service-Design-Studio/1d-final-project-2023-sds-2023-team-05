import styles from '@/styles/FAQheader.module.css';
import { useRouter } from 'next/navigation';

const FAQheader = () => {
	const router = useRouter();

	const handleBackButtonClick = () => {
		router.push('/');
	};

	const handleChatButtonClick = () => {
		router.push('/chatbot');
	};

	return (
		<div id='faq-header' className={styles.header}>
			<div className={styles.backButton} onClick={handleBackButtonClick}></div>
			<div className={styles.textContainer}>
				<div className={styles.botText}>Don't have your question? Ask me!</div>
				<div className={styles.headerText}>FAQs</div>
			</div>
			<div
				id='chatbot-icon'
				className={styles.chatbotIcon}
				onClick={handleChatButtonClick}>
			</div>
		</div>
	);
};

export default FAQheader;
