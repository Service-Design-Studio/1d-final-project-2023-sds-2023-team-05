'use client';

import styles from '@/styles/login.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function SessionCode({ idAndClassCode }) {
	const [classCode, setClassCode] = useState(Array(6).fill(''));
	const inputRefs = useRef([]);
	const router = useRouter();

	const handleClassCodeChange = (event, index) => {
		const inputValue = event.target.value.trim();
		const isValidInteger = /^\d*$/.test(inputValue); // Check if the input is a valid integer

		if (isValidInteger) {
			const updatedClassCode = [...classCode];
			updatedClassCode[index] = inputValue;
			setClassCode(updatedClassCode);

			// Move focus to the next input cell if there is an input value
			if (inputValue && index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		} else {
			event.preventDefault(); // Prevent non-integer input from being displayed
		}
	};

	const handlekeypressed = (event, index) => {
		if (event.keyCode === 8 && classCode[index] === "") {
			// Move focus to the previous input cell if the current cell is empty
			if (index > 0) {
				inputRefs.current[index - 1].focus();
			}
			return; // Exit the function early since there's no need to update the state
		}
	}

	useEffect(() => {
		if (classCode.join('').length === 6) {
			const combinedCode = classCode.join(''); // Combine digits into a string
			const lastDigit = combinedCode.slice(-1);
			console.log(idAndClassCode);

			if (combinedCode in idAndClassCode) {
				const path = '/first?classCode=' + idAndClassCode[combinedCode];
				router.push(path);
			} else {
				alert('Invalid class code');
				const parentDiv = document.querySelector(`.${styles.login_row}`); // Use styles.login_row

				if (parentDiv) {
					const inputElements = parentDiv.querySelectorAll('input');
					console.log(parentDiv);

					inputElements.forEach((input) => {
						input.value = '';
					});
				}
			}
		}
	}, [classCode, router]);

	return (
		<main className={styles.main}>
			{/* Your existing content */}
			{/* ... */}

			{/* Login form */}

			<div className={styles.loginContainer}>
				<h2 className={styles.title}>Kampung Klass</h2>
				<div className={styles.subtitle}>Enter your Klass code!</div>
				<div className={styles.classCodeInput}>
					<div className={styles.row}>
						{classCode.map((digit, index) => (
							<input
								key={index}
								type='text'
								id={index}
								maxLength={1}
								value={digit}
								onChange={(event) => handleClassCodeChange(event, index)}
								onKeyDown={(event) => handlekeypressed(event, index)}
								ref={(input) => (inputRefs.current[index] = input)}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
