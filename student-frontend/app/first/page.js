'use client';

import FAQheader from '@/components/faq-header';
import Stoopidtable from '@/components/table';
import styles from '@/styles/styles.module.css';
import { useEffect, useState } from 'react';

function Page() {
  const [classCode, setClassCode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('classCode');

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
      {!isLoading && <Stoopidtable classCode={classCode} />}
    </div>
  );
}

export default Page;
