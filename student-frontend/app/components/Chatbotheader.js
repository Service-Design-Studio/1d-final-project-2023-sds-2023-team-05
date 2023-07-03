import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/FAQheader.module.css';

const Chatbotheader = () => {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/first');
    };

    return (
        <div className={styles.header}>
            <button className={styles.backButton} onClick={handleBackButtonClick}>{'<'}</button>
            <h1 className={styles.headerText}>Chatbot</h1>
            <div className={styles.placeholderIcon}>{'>'}</div>
        </div>
    );
};

export default Chatbotheader;