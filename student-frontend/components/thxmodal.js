import { API_URL } from '@/config';
import styles from '@/styles/modal.module.css';
import { useState } from 'react';

function ThxModal({
    isOpen,
    onClose,
    messageId,
    setIsModalOpen,
}) {
    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <button
                                className={styles.closeButton}
                                onClick={() => closeModal()}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div
                                id="flag-pop-up"
                                style={{ paddingTop: '20px', marginBottom: '10px' }}
                            >
                                <h2>Thanks for your feedback! Our team will be looking into the answer</h2>
                            </div>
                            <button
                                id="flag-question"
                                className={`${styles.textcloseButton}`}
                                onClick={() => onClose()}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ThxModal;
