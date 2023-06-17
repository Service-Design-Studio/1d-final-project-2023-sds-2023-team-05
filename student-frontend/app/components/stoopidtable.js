"use client"

import React, { useEffect, useState } from "react";
import styles from '../styles/styles.module.css'

//Element will still be styled even without the original importing the styles


async function getTasks() {
    const res = await fetch("https://faqapi-service-mgn7slqt5a-as.a.run.app/faqs", { cache: "no-store" });
    const faqs = await res.json();
    return faqs;
}

function Stoopidtable() {
    const [theadData, setTheadData] = useState([]);
    const [tbodyData, setTbodyData] = useState([]);
    const [activeRow, setActiveRow] = useState([]);

    const handleRowClick = (rowIndex) => {
        if (activeRow === rowIndex) {
            setActiveRow(null); // Toggle off the active state
        } else {
            setActiveRow(rowIndex); // Set the clicked row as active
        }
    };

    useEffect(() => {
        getTasks().then(faqs => {
            const tableHeadings = Object.keys(faqs[0]);
            setTheadData(tableHeadings);
            setTbodyData(faqs);
        });
    }, []);

    return (
        <table className={styles.table_mainstyle}>
            <tbody>
                {tbodyData.map((row, index) => (
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
    )
}

export default Stoopidtable