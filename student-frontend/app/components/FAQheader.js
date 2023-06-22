import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/FAQheader.module.css';

const FAQheader = () => {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/');
    };

    return (
        <div className={styles.header}>
            <button className={styles.backButton} onClick={handleBackButtonClick}>{'<'}</button>
            <h1 className={styles.headerText}>FAQ</h1>
            <div className={styles.placeholderIcon}>{'>'}</div>
        </div>
    );
};

export default FAQheader;