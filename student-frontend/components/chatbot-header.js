import styles from '@/styles/chatbot.module.css';
import { useRouter } from 'next/navigation';

const Chatbotheader = () => {
	const router = useRouter();

	const handleBackButtonClick = () => {
		window.history.back();
	};

	return (
		<div id='chatbot-header' className={styles.header}>
			<button className={styles.backButton} onClick={handleBackButtonClick}></button>
			<div className={styles.iconAndText}></div>
			<div className={styles.placeholderIcon}>
				<h1 className={styles.headerText}>TrainerBot</h1>
			</div>
		</div>
	);
};

export default Chatbotheader;
