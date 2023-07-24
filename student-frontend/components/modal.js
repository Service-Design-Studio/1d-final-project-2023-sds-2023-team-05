import React from 'react';
import styles from '@/styles/modal.module.css';

function Modal({ isOpen, onClose, children, messageId, setIsModalOpen, API_URL }) {

    async function flagComment(id, setIsModalOpen, API_URL) {
        const res = await fetch(`${API_URL}/chats/${id}`, {
            body: JSON.stringify({
                flagged: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PATCH',
        });

        setIsModalOpen(false)

        if (!res.ok) {
            alert('Error...');
        }
    }

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <button className={styles.closeButton} onClick={onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {children}
                            <button className={styles.flagButton} onClick={() => flagComment(messageId, setIsModalOpen, API_URL)}>flag</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
