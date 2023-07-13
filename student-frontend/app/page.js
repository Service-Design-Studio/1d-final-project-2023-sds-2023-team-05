import styles from './styles/login.module.css';
import { useRouter } from 'next/navigation';
import SessionCode from './components/session-code';

async function getSessions() {
  const res = await fetch(
    `https://faqapi-service-mgn7slqt5a-as.a.run.app/sessions`,
    { cache: 'no-store' }
  );
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
