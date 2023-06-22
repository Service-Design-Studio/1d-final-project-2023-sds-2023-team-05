"use client"

import React, { useEffect, useState } from "react";
import styles from '../styles/styles.module.css';

async function getTasks(ClassCode) {
  const res = await fetch("https://faqapi-service-mgn7slqt5a-as.a.run.app/sessions/" + ClassCode, { cache: "no-store" });
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
  const [searchText, setSearchText] = useState("");
  const [activeTag, setActiveTag] = useState("all"); // Default active tag is "all"
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
    if (activeTag === "all") {
      return row.question.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return (
        row.question.toLowerCase().includes(searchText.toLowerCase()) &&
        row.question.toLowerCase().includes(activeTag.toLowerCase())
      );
    }
  });

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search"
        className={styles.searchInput}
      />
      <div className={styles.tags}>
        <button
          className={`${styles.tag} ${activeTag === "all" ? styles.active_tag : ""}`}
          onClick={() => handleTagClick("all")}
        >
          All
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === "islam" ? styles.active_tag : ""
          }`}
          onClick={() => handleTagClick("islam")}
        >
          Islam
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === "Christianity" ? styles.active_tag : ""
          }`}
          onClick={() => handleTagClick("Christianity")}
        >
          Christianity
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === "Judaism" ? styles.active_tag : ""
          }`}
          onClick={() => handleTagClick("Judaism")}
        >
          Judaism
        </button>
      </div>
      <table className={styles.table_mainstyle}>
        <tbody>
          {filteredData.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                className={activeRow === index ? styles.active : ""}
                onClick={() => handleRowClick(index)}
              >
                <td className={styles.table_maincell}>
                  <p className={styles.table_text}>
                    <b>Question: {row.question}</b>
                  </p>
                  <div
                    className={`${styles.stoopid_box} ${
                      activeMainCell === index ? styles.flipped : ""
                    }`}
                  ></div>
                </td>
              </tr>
              {activeRow === index && (
                <tr>
                  <td colSpan={theadData.length}>
                    <div className={styles.table_answer}>
                      Answer: {row.answer}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Stoopidtable;
