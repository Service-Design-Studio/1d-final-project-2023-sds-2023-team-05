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
    <div className={styles.header}>
      <button className={styles.backButton} onClick={handleBackButtonClick}>
        {'<'}
      </button>
      <h1 className={styles.headerText}>FAQ</h1>
      <div className={styles.chatbotIcon} onClick={handleChatButtonClick}></div>
    </div>
  );
};

export default FAQheader;
