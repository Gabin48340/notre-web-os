import React from 'react';
import { useOS } from '../context/OSContext';

export default function Taskbar() {
    const { openWindow } = useOS();

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px',
            backgroundColor: 'rgba(44, 62, 80, 0.95)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            gap: '15px',
            zIndex: 9999, // Toujours au-dessus des fenêtres
            borderTop: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{ color: 'white', fontWeight: 'bold', marginRight: '20px' }}>🌐 WebOS</div>
            
            {/* Boutons pour lancer les apps */}
            <button onClick={() => openWindow('annonces')} style={btnStyle}>📢 Annonces</button>
            <button onClick={() => openWindow('chat')} style={btnStyle}>💬 Chat</button>
            <button onClick={() => openWindow('fichiers')} style={btnStyle}>📂 Cloud</button>
        </div>
    );
}

const btnStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s'
};