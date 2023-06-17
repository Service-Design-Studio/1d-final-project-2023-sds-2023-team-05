import React from 'react'
import styles from '../styles/styles.module.css'
import Stoopidtable from '../components/stoopidtable'
import FAQheader from '../components/FAQheader'
import Buttonexample from '../components/button'


function page() {
    return (
        <div className={styles.main_flex}>
            <FAQheader></FAQheader>
            <Stoopidtable></Stoopidtable>
        </div>
    )
}

export default page