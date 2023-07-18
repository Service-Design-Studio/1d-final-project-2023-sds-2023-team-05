'use client';

import styles from '@/styles/styles.module.css';

//Element will still be styled even without the original importing the styles

function Buttonexample() {
  return <button className={styles.main_button}>hi</button>;
}

export default Buttonexample;
