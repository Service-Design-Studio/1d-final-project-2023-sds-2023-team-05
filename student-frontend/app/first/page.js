"use client"

import React, { useEffect, useState } from 'react'
import styles from '../styles/styles.module.css'
import Stoopidtable from '../components/stoopidtable'
import FAQheader from '../components/FAQheader'
import Buttonexample from '../components/button'


function page() {
    const [classCode, setClassCode] = useState(null);


    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get("classCode");

        if (code) {
            setClassCode(code);
            console.log(code)
        }
    }, []);

    return (
        <div className={styles.main_flex}>
            <FAQheader></FAQheader>
            <Stoopidtable></Stoopidtable>
        </div>
    )
}

export default page