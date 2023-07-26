'use client';

import { API_URL } from '@/config';
import styles from '@/styles/styles.module.css';
import React, { useEffect, useState } from 'react';

async function getTasks(ClassCode) {
  const res = await fetch(`${API_URL}/sessions/${ClassCode}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.faqs;
}

function mapClassCodeToId(classCode) {
  const lastDigit = classCode.slice(-1);
  return lastDigit;
}

function Stoopidtable({ classCode }) {
  const [theadData, setTheadData] = useState([]);
  const [tbodyData, setTbodyData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [activeTag, setActiveTag] = useState('all'); // Default active tag is "all"
  const ClassCode = mapClassCodeToId(classCode);
  const [activeRow, setActiveRow] = useState(null);
  const [activeMainCell, setActiveMainCell] = useState(null);

  const handleRowClick = (rowIndex) => {
    setActiveRow(rowIndex);
    if (activeRow === rowIndex && activeMainCell === rowIndex) {
      setActiveRow(null); // Reset the active row
      setActiveMainCell(null); // Reset the active main cell
    } else {
      setActiveRow(rowIndex); // Set the clicked row as active
      setActiveMainCell(rowIndex); // Set the clicked main cell as active
    }
  };

  useEffect(() => {
    getTasks(ClassCode).then((faqs) => {
      const tableHeadings = Object.keys(faqs[0]);
      setTheadData(tableHeadings);
      setTbodyData(faqs);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const filteredData = tbodyData.filter((row) => {
    if (activeTag === 'all') {
      return row.question.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return (
        row.question.toLowerCase().includes(searchText.toLowerCase()) &&
        row.question.toLowerCase().includes(activeTag.toLowerCase())
      );
    }
  });

  return (
    <div className={styles.main_Component_styler}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search"
        className={styles.searchInput}
      />
      <div className={styles.tag_holder}>
        <button
          className={`${styles.tag} ${
            activeTag === 'all' ? styles.active_tag : ''
          }`}
          onClick={() => handleTagClick('all')}
        >
          All
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === 'islam' ? styles.active_tag : ''
          }`}
          onClick={() => handleTagClick('islam')}
        >
          Islam
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === 'Christianity' ? styles.active_tag : ''
          }`}
          onClick={() => handleTagClick('Christianity')}
        >
          Christianity
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === 'Judaism' ? styles.active_tag : ''
          }`}
          onClick={() => handleTagClick('Judaism')}
        >
          Judaism
        </button>
      </div>
      {filteredData.length > 0 ? (
        <table className={styles.table_mainstyle}>
          <tbody>
            {filteredData.map((row, index) => (
              <React.Fragment key={index}>
                <tr
                  className={activeRow === index ? styles.active : ''}
                  onClick={() => handleRowClick(index)}
                >
                  <td className={styles.table_maincell}>
                    <p className={styles.table_text}>
                      <b>{row.question}</b>
                    </p>
                    <div
                      className={`${styles.stoopid_box} ${
                        activeMainCell === index ? styles.flipped : ''
                      }`}
                    ></div>
                  </td>
                </tr>
                {activeRow === index && (
                  <tr>
                    <td colSpan={theadData.length}>
                      <div className={styles.table_answer}>{row.answer}</div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.emptyMessage}>
          Don't have your question? Try our Chatbot!
        </div>
      )}
    </div>
  );
}

export default Stoopidtable;
