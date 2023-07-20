import { API_URL } from '@/config';
import SessionCode from '../components/session-code';

async function getSessions() {
	const res = await fetch(`${API_URL}/sessions`, { cache: 'no-store' });
	const sessions = await res.json();
	const idAndClassCode = {};

	sessions.forEach((session) => {
		idAndClassCode[session.classcode] = session.id;
	});

	return idAndClassCode;
}

export default async function Home() {
	const idAndClassCode = await getSessions();

	return (
		<>
			<SessionCode idAndClassCode={idAndClassCode} />
		</>
	);
}
