import { API_URL } from '@/config';
import styles from '@/styles/modal.module.css';
import { useState } from 'react';

function Modal({
  isOpen,
  onClose,
  messageId,
  setIsModalOpen,
  setFlaggedQuestions,
}) {
  const [selectedReason, setSelectedReason] = useState('');
  const [othersResponse, setOthersResponse] = useState('');
  const [responseName, setResponseName] = useState('');


  async function flagComment(id, setIsModalOpen) {
    if (selectedReason == '') {
      alert('Select a reason');
      return;
    }
    if (selectedReason == 'Others' && othersResponse == '') {
      alert('Please fill in a reason');
      return;
    }
    const res = await fetch(`${API_URL}/chats/${id}`, {
      body: JSON.stringify({
        learner: responseName,
        flagged: true,
        reason: selectedReason,
        comment: othersResponse,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    });

    setFlaggedQuestions((prevQuestions) => [...prevQuestions, messageId]);
    closeModal();
    setIsModalOpen(false);
    // TODO: Reset fields
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

  const closeModal = () => {
    setSelectedReason('');
    setOthersResponse('');
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
                <h2>Why are you flagging this answer?</h2>
              </div>
              <textarea
                id="flaggingName"
                className={styles.namearea}
                value={responseName}
                onChange={(e) => setResponseName(e.target.value)}
                placeholder="Optional: Name"
              />              <div
                className={`${styles.reasonbox} ${selectedReason === 'Rude or Offensive' ? styles.selected : ''
                  }`}
                onClick={() => handleReasonClick('Rude or Offensive')}
                id="modalReasonRoO"
              >
                Rude or Offensive
              </div>
              <div
                className={`${styles.reasonbox} ${selectedReason === 'Inaccurate information'
                  ? styles.selected
                  : ''
                  }`}
                onClick={() => handleReasonClick('Inaccurate information')}
                id="modalReasonM"
              >
                Inaccurate information
              </div>
              <div
                className={`${styles.reasonbox} ${selectedReason === 'Does not answer the question'
                  ? styles.selected
                  : ''
                  }`}
                onClick={() =>
                  handleReasonClick('Does not answer the question')
                }
                id="modalReasonDNATQ"
              >
                Does not answer the question
              </div>
              <div
                className={`${styles.reasonbox} ${selectedReason === 'Religious Propaganda'
                  ? styles.selected
                  : ''
                  }`}
                onClick={() => handleReasonClick('Religious Propaganda')}
                id="modalReasonRP"
              >
                Religious Propaganda
              </div>
              <div
                className={`${styles.reasonbox} ${selectedReason === 'Others' ? styles.selected : ''
                  }`}
                onClick={() => handleReasonClick('Others')}
                id="modalReasonO"
              >
                Others
              </div>
              {selectedReason === 'Others' && (
                <textarea
                  id="otherReasonTextField"
                  className={styles.textarea}
                  value={othersResponse}
                  onChange={(e) => setOthersResponse(e.target.value)}
                  placeholder="Please provide your reason..."
                />
              )}
              <button
                id="flag-question"
                className={`${styles.flagButton}`}
                onClick={() => flagComment(messageId, setIsModalOpen)}
              >
                Flag Answer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
