import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/launch');
  }, []);

  return (
    <main style={{
      background: '#000',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      ⚡ Felena Theory is Live 🎯
    </main>
  );
}