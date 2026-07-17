import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AnnoncesApp() {
    const [annonces, setAnnonces] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Charger les annonces depuis Supabase au démarrage
    useEffect(() => {
        fetchAnnonces();
    }, []);

    async function fetchAnnonces() {
        const { data } = await supabase.from('annonces').select('*').order('created_at', { ascending: false });
        if (data) setAnnonces(data);
    }

    // Envoyer une nouvelle annonce
    async function handleSubmit(e) {
        e.preventDefault();
        if (!title || !content) return;

        await supabase.from('annonces').insert([{ title, content }]);
        setTitle('');
        setContent('');
        fetchAnnonces(); // Recharger la liste
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', height: '100%' }}>
            {/* Formulaire pour créer une annonce */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input 
                    type="text" 
                    placeholder="Titre de l'annonce..." 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    style={inputStyle}
                />
                <textarea 
                    placeholder="Contenu de l'annonce..." 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    style={{ ...inputStyle, height: '60px', resize: 'none' }}
                />
                <button type="submit" style={btnStyle}>Publier l'annonce</button>
            </form>

            <hr style={{ border: 'none', borderTop: '1px solid #ddd' }} />

            {/* Liste des annonces */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {annonces.length === 0 ? <p style={{ color: '#888', textAlign: 'center' }}>Aucune annonce pour le moment.</p> : 
                    annonces.map((pub) => (
                        <div key={pub.id} style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '4px solid #34495e' }}>
                            <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>{pub.title}</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{pub.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'sans-serif' };
const btnStyle = { padding: '8px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };