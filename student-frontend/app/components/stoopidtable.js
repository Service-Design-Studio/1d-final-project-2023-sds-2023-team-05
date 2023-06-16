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

    useEffect(() => {
        getTasks().then(faqs => {
            const tableHeadings = Object.keys(faqs[0]);
            setTheadData(tableHeadings);
            setTbodyData(faqs);
        });
    }, []);

    return (
        <table>
            {theadData.map(heading => {
                return <th key={heading}>{heading}</th>
            })}
            {tbodyData.map((row, index) => {
                return <tr key={index} className={styles.table_maincell}>
                    {theadData.map((key, index) => {
                        return <td key={row[key]}>{row[key]}</td>
                    })}
                </tr>;
            })}
        </table>
    )
}

export default Stoopidtable