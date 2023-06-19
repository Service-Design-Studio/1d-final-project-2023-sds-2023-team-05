"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/styles.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const [classCode, setClassCode] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const router = useRouter();

  const handleClassCodeChange = (event, index) => {
    const inputValue = event.target.value.toUpperCase().substring(0, 1);
    const updatedClassCode = [...classCode];
    updatedClassCode[index] = inputValue;
    setClassCode(updatedClassCode);

    // Move focus to the next input cell
    if (inputValue && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    if (classCode.join("").length === 6) {
      const path = "/first?classCode=" + classCode.join("");
      router.push(path);
    }
  }, [classCode, router]);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${styles.main}`}>
      {/* Your existing content */}
      {/* ... */}

      {/* Login form */}
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <div className={styles.classCodeInput}>
          {classCode.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(event) => handleClassCodeChange(event, index)}
              ref={(input) => (inputRefs.current[index] = input)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}