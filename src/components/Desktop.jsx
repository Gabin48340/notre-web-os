import React from 'react';
import Window from './Window';
import AnnoncesApp from './AnnoncesApp';

export default function Desktop() {
    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#34495e',
            overflow: 'hidden'
        }}>
            {/* Fenêtre de l'application Annonces */}
            <Window id="annonces" title="📢 Tableau d'annonces">
                <AnnoncesApp />
            </Window>

            {/* Fenêtre de l'application Chat */}
            <Window id="chat" title="💬 Messagerie Privée">
                <p>Discute en temps réel avec les autres connectés.</p>
            </Window>

            {/* Fenêtre de l'application Explorateur */}
            <Window id="fichiers" title="📁 Explorateur Cloud">
                <p>Espace de stockage collaboratif.</p>
            </Window>
        </div>
    );
}