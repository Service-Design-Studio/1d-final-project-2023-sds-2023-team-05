import React from 'react';
import { useState } from 'react';
import styles from '@/styles/modal.module.css';

function Modal({ isOpen, onClose, children, messageId, setIsModalOpen, API_URL }) {
    const [selectedReason, setSelectedReason] = useState('');
    const [othersResponse, setOthersResponse] = useState('');


    async function flagComment(id, setIsModalOpen, API_URL) {
        if (selectedReason == '') {
            alert('Select a reason');
            return
        }
        const res = await fetch(`${API_URL}/chats/${id}`, {
            body: JSON.stringify({
                flagged: true,
                reason: selectedReason,
                comment: othersResponse
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

    const handleReasonClick = (reason) => {
        setSelectedReason(reason);
        if (reason !== 'Others') {
            setOthersResponse('');
        }
    };

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <button className={styles.closeButton} onClick={onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div style={{ paddingTop: '20px', marginBottom: '10px' }}>
                                <h2>Why are you flagging this answer?</h2>
                            </div>
                            <div
                                className={`${styles.reasonbox} ${selectedReason === 'Rude or Offensive' ? styles.selected : ''
                                    }`}
                                onClick={() => handleReasonClick('Rude or Offensive')}
                            >
                                Rude or Offensive
                            </div>
                            <div
                                className={`${styles.reasonbox} ${selectedReason === 'Misinformation' ? styles.selected : ''
                                    }`}
                                onClick={() => handleReasonClick('Misinformation')}
                            >
                                Misinformation
                            </div>
                            <div
                                className={`${styles.reasonbox} ${selectedReason === 'Does not answer the question' ? styles.selected : ''
                                    }`}
                                onClick={() => handleReasonClick('Does not answer the question')}
                            >
                                Does not answer the question
                            </div>
                            <div
                                className={`${styles.reasonbox} ${selectedReason === 'Religious Propaganda' ? styles.selected : ''
                                    }`}
                                onClick={() => handleReasonClick('Religious Propaganda')}
                            >
                                Religious Propaganda
                            </div>
                            <div
                                className={`${styles.reasonbox} ${selectedReason === 'Others' ? styles.selected : ''
                                    }`}
                                onClick={() => handleReasonClick('Others')}
                            >
                                Others
                            </div>
                            {selectedReason === 'Others' && (
                                <textarea
                                    className={styles.textarea}
                                    value={othersResponse}
                                    onChange={(e) => setOthersResponse(e.target.value)}
                                    placeholder="Please provide your reason..."
                                />
                            )}
                            <button className={styles.flagButton} onClick={() => flagComment(messageId, setIsModalOpen, API_URL)}>Flag Question</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
