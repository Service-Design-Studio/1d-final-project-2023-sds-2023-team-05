"use client"

import React, { useEffect, useState } from "react";
import styles from '../styles/styles.module.css'

//Element will still be styled even without the original importing the styles

function FAQheader() {
    return (
        <div className={styles.faq_background}>
            <h1>FAQ</h1>
            <p>Hi there haoyi</p>
            <p>Hi Hubert </p>
        </div>
    )
}

export default FAQheader