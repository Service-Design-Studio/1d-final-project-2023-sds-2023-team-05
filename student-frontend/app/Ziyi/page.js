import React from 'react'
import FAQheader from '../components/FAQheader'
import styles from '../styles/styles.module.css'

function page() {
    return (
        <div className={styles.main_flex}>
            <p>This is yong liang's page</p>
            <FAQheader></FAQheader>
        </div>
    )
}

export default page