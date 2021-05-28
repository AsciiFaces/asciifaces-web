import React from 'react';
import { useHistory } from 'react-router';
import useWeb3 from '../../hooks/useWeb3';

function Navigation() {
    const { connected, handleConnect } = useWeb3();
    const history = useHistory();

    const openExternal = (link) => {
        window.open(link, '_blank');
    };

    const openInternal = (path) => {
        history.push(path);
    };

    return (
        <div className="absolute flex h-14 justify-between items-center w-full px-8 sm:mt-2">
            <div className="flex-grow"></div>
            <button onClick={() => openInternal('/#about')} className="nav-btn">
                About
            </button>
            <button onClick={() => openInternal('/inventory')} className="nav-btn">
                My Faces
            </button>
            <button
                onClick={() => openExternal('https://opensea.io/collection/meebits')}
                className="nav-btn">
                Opensea
            </button>
            <button className="nav-btn" onClick={handleConnect}>
                {connected ? '✓ Connected' : 'Connect'}
            </button>
        </div>
    );
}

export default Navigation;
