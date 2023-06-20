"use client"

import React, { useEffect, useState } from "react";
import styles from '../styles/styles.module.css'

//Element will still be styled even without the original importing the styles


async function getTasks(ClassCode) {
    const res = await fetch("https://faqapi-service-mgn7slqt5a-as.a.run.app/sessions/" + ClassCode, { cache: "no-store" });
    const data = await res.json();
    return data.faqs;
}

function mapClassCodeToId(classCode) {
    // Extract the first digit from the classCode
    const firstDigit = classCode.substring(0, 1);

    // Map the first digit to the corresponding ID
    if (firstDigit >= "0" && firstDigit <= "4") {
        return "1";
    } else {
        return "2";
    }
}

function Stoopidtable({ classCode }) {
    const [theadData, setTheadData] = useState([]);
    const [tbodyData, setTbodyData] = useState([]);
    const [activeRow, setActiveRow] = useState([]);
    const [searchText, setSearchText] = useState('');
    const ClassCode = mapClassCodeToId(classCode);

    const handleRowClick = (rowIndex) => {
        if (activeRow === rowIndex) {
            setActiveRow(null); // Toggle off the active state
        } else {
            setActiveRow(rowIndex); // Set the clicked row as active
        }
    };

    useEffect(() => {
        getTasks(ClassCode).then(faqs => {
            const tableHeadings = Object.keys(faqs[0]);
            setTheadData(tableHeadings);
            setTbodyData(faqs);
        });
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredData = tbodyData.filter(row =>
        row.question.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search questions..."
                className={styles.searchInput}
            />
            <table className={styles.table_mainstyle}>
                <tbody>
                    {filteredData.map((row, index) => (
                        <React.Fragment key={index}>
                            <tr
                                className={activeRow === index ? styles.active : ''}
                                onClick={() => handleRowClick(index)}
                            >
                                <td className={styles.table_maincell}>Question: {row.question}</td>
                            </tr>
                            {activeRow === index && (
                                <tr>
                                    <td colSpan={theadData.length} className={styles.table_answer}>
                                        Answer: {row.answer}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Stoopidtable