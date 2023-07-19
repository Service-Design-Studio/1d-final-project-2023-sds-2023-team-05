import { API_URL } from '@/config';
import SessionCode from '../components/session-code';

async function getSessions() {
  const res = await fetch(`${API_URL}/sessions`, { cache: 'no-store' });
  const sessions = await res.json();
  const idAndClassCode = {};

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
								ref={(input) => (inputRefs.current[index] = input)}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
