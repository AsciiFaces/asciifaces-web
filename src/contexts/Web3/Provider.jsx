import React, { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import Web3Context from './Context.js';

function Web3Provider({ children }) {
    const [web3Modal, setWeb3Modal] = useState(undefined);
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const [wallet, setWallet] = useState(undefined);

    const handleConnect = useCallback(
        async function () {
            const provider = await web3Modal.connect();

            if (provider) {
                console.log(provider);

                const newWeb3 = new ethers.providers.Web3Provider(provider);
                const accounts = await newWeb3.listAccounts();

                setConnected(true);
                setWalletAddress(accounts[0]);
                setWallet(newWeb3.getSigner());

                provider.on('accountsChanged', (newAccounts) => {
                    if (Array.isArray(newAccounts) && newAccounts.length) {
                        setWalletAddress(newAccounts[0]);
                    }
                });
                console.log(accounts);
            } else {
                await handleDisconnect();
            }
        },
        [web3Modal, handleDisconnect]
    );

    const handleDisconnect = useCallback(async () => {
        setConnected(false);
        setWalletAddress(undefined);
        setWallet(undefined);
    }, [setConnected, setWalletAddress, setWallet]);

    useEffect(() => {
        async function initWeb3Modal() {
            try {
                if (!web3Modal) {
                    const providerOptions = {};

                    const web3Modal = new Web3Modal({
                        cacheProvider: true,
                        providerOptions,
                        theme: 'dark'
                    });

                    setWeb3Modal(web3Modal);
                }

                handleConnect();
            } catch (err) {
                console.log(err);
            }
        }

        initWeb3Modal();
    }, [handleConnect, setWeb3Modal, web3Modal]);

    return (
        <Web3Context.Provider
            value={{
                connected,
                handleConnect,
                handleDisconnect,
                walletAddress,
                wallet
            }}>
            {children}
        </Web3Context.Provider>
    );
}

export default Web3Provider;
