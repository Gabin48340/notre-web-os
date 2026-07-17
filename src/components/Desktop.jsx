import React from 'react';
import { useOS } from '../context/OSContext';
import Window from './Window';
import AnnoncesApp from './AnnoncesApp';
export default function Desktop() {
    const { windows } = useOS();

    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#34495e', // Un fond bleu/gris d'ordinateur
            overflow: 'hidden',
            backgroundImage: 'radial-gradient(circle, #2c3e50 10%, transparent 11%)',
            backgroundSize: '20px 20px'
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
            <Window id="fichiers" title="📂 Explorateur Cloud">
                <p>Espace de stockage collaboratif.</p>
            </Window>
        </div>
    );
}