import React, { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import Fortmatic from 'fortmatic';
import Web3Context from './Context.js';

// eslint-disable-next-line react/prop-types
function Web3Provider({ children }) {
    const [web3Modal, setWeb3Modal] = useState(undefined);
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const [wallet, setWallet] = useState(undefined);
    const [chainId, setChainId] = useState(0);

    const handleDisconnect = useCallback(async () => {
        setConnected(false);
        setWalletAddress(undefined);
        setWallet(undefined);
        setChainId(0);
    }, [setConnected, setWalletAddress, setWallet]);

    const handleConnect = useCallback(
        async function () {
            const provider = await web3Modal?.connect();

            if (provider) {
                const newWeb3 = new ethers.providers.Web3Provider(provider);
                const accounts = await newWeb3.listAccounts();

                setConnected(true);
                setWalletAddress(accounts[0]);
                setWallet(newWeb3.getSigner());
                setChainId((await newWeb3.getNetwork()).chainId);

                provider.on('accountsChanged', (newAccounts) => {
                    if (Array.isArray(newAccounts) && newAccounts.length) {
                        setWalletAddress(newAccounts[0]);
                    }
                });
            } else {
                await handleDisconnect();
            }
        },
        [web3Modal, handleDisconnect]
    );

    useEffect(() => {
        async function initWeb3Modal() {
            try {
                if (!web3Modal) {
                    const providerOptions = {
                        fortmatic: {
                            package: Fortmatic, // required
                            options: {
                                key: 'pk_test_FE1FA464E5B0A64B' // required
                            }
                        }
                    };

                    const web3Modal = new Web3Modal({
                        theme: 'dark',
                        network: 'ropsten',
                        cacheProvider: true,
                        providerOptions
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
                wallet,
                chainId
            }}>
            {children}
        </Web3Context.Provider>
    );
}

export default Web3Provider;
