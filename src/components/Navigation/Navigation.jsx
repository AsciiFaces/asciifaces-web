import React from 'react';
import useWeb3 from '../../hooks/useWeb3';

function Navigation() {
    const { connected, handleConnect } = useWeb3();

    return (
        <div className="absolute flex h-14 justify-between items-center w-full z-50 px-8 sm:mt-2">
            <div className="flex-grow"></div>
            <button className="nav-btn">About</button>
            <button className="nav-btn">My Faces</button>
            <button className="nav-btn">Opensea</button>
            <button className="nav-btn" onClick={handleConnect}>
                {connected ? '✓ Connected' : 'Connect'}
            </button>
        </div>
    );
}

export default Navigation;
