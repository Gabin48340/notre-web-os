import React from 'react';
import { useOS } from '../context/OSContext';

export default function Window({ id, title, children }) {
    const { windows, closeWindow, setActiveApp } = useOS();
    const appState = windows[id];

    if (!appState || !appState.isOpen) return null;

    return (
        <div 
            style={{
                position: 'absolute',
                left: `${appState.x}px`,
                top: `${appState.y}px`,
                width: '400px',
                height: '300px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                zIndex: appState.zIndex
            }}
            onClick={() => setActiveApp(id)}
        >
            {/* Barre de titre de la fenêtre */}
            <div style={{
                backgroundColor: '#2c3e50',
                color: 'white',
                padding: '10px',
                display: 'flex',
                justify-content: 'between',
                alignItems: 'center',
                cursor: 'move',
                userSelect: 'none'
            }}>
                <span style={{ fontWeight: 'bold' }}>{title}</span>
                <button 
                    onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                    style={{
                        background: '#e74c3c',
                        border: 'none',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        lineHeight: '1'
                    }}
                >
                    ✕
                </button>
            </div>

            {/* Contenu interne de l'application */}
            <div style={{ padding: '15px', flex: 1, overflowY: 'auto' }}>
                {children}
            </div>
        </div>
    );
}