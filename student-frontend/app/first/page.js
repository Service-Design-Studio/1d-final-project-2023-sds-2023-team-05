"use client"

import React, { useEffect, useState } from 'react'
import styles from '../styles/styles.module.css'
import Stoopidtable from '../components/stoopidtable'
import FAQheader from '../components/FAQheader'
import Buttonexample from '../components/button'


function page() {
    const [classCode, setClassCode] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get("classCode");

        if (code) {
            setClassCode(code);
        }
    }, []);

    useEffect(() => {
        if (classCode) {
            setIsLoading(false);
        }
    }, [classCode]);

    return (
        <div className={styles.main_flex}>
            <FAQheader></FAQheader>
            {!isLoading && (
                <Stoopidtable classCode={classCode} />
            )}
        </div>
    )
}

export default page