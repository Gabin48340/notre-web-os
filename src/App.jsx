import React from 'react';
import { OSProvider } from './context/OSContext';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

export default function App() {
    return (
        <OSProvider>
            <Desktop />
            <Taskbar />
        </OSProvider>
    );
}