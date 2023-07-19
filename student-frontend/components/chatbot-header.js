import styles from '@/styles/chatbot.module.css';
import { useRouter } from 'next/navigation';

const Chatbotheader = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/first');
  };

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={handleBackButtonClick}>
        {'<'}
      </button>
      <h1 className={styles.headerText}>Chatbot</h1>
      <div className={styles.placeholderIcon}>{''}</div>
    </div>
  );
};

export default Chatbotheader;
