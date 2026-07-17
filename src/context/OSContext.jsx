import React, { createContext, useState, useContext } from 'react';

const OSContext = createContext();

export const OSProvider = ({ children }) => {
    // État pour savoir quelles fenêtres sont ouvertes et leur position
    const [windows, setWindows] = useState({
        annonces: { isOpen: false, isMinimized: false, zIndex: 1, x: 50, y: 50 },
        chat: { isOpen: false, isMinimized: false, zIndex: 1, x: 100, y: 100 },
        fichiers: { isOpen: false, isMinimized: false, zIndex: 1, x: 150, y: 150 },
    });

    const [activeApp, setActiveApp] = useState(null);

    const openWindow = (appId) => {
        setWindows(prev => ({
            ...prev,
            [appId]: { ...prev[appId], isOpen: true, isMinimized: false, zIndex: 10 }
        }));
        setActiveApp(appId);
    };

    const closeWindow = (appId) => {
        setWindows(prev => ({
            ...prev,
            [appId]: { ...prev[appId], isOpen: false }
        }));
    };

    const updatePosition = (appId, x, y) => {
        setWindows(prev => ({
            ...prev,
            [appId]: { ...prev[appId], x, y }
        }));
    };

    return (
        <OSContext.Provider value={{ windows, openWindow, closeWindow, updatePosition, activeApp, setActiveApp }}>
            {children}
        </OSContext.Provider>
    );
};

export const useOS = () => useContext(OSContext);