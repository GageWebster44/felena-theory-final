// pages/launch.tsx
import React from 'react';

export default function Launch() {
  return (
    <main style={{
      background: '#000',
      color: '#0f0',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀 Felena Theory Official Launch</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
        The XP Engine is now active. Unlock engines, earn prestige, and build your glow.
      </p>
      <p style={{ marginTop: '2rem', color: '#888' }}>
        Launch date confirmed: <strong>November 7, 2025</strong>
      </p>
    </main>
  );
}