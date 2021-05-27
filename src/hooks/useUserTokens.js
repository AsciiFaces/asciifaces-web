import { useEffect, useState } from 'react';
import useWeb3 from './useWeb3';
import useContract from './useContract';

function useUserTokens() {
    const { walletAddress } = useWeb3();
    const { contract } = useContract();
    const [loading, setLoading] = useState(true);
    const [balance, setBalance] = useState(0);
    const [tokenIds, setTokenIds] = useState([]);

    useEffect(() => {
        async function loadUserTokens(address) {
            const balance = await contract.balanceOf(address);
            setBalance(Number(balance));

            const tokenIds = [];
            for (let i = 0; i < Number(balance); i++) {
                tokenIds.push((await contract.tokenOfOwnerByIndex(address, i)).toNumber());
            }

            setTokenIds(tokenIds);
            setLoading(false);
        }

        if (!contract || !walletAddress) return;
        loadUserTokens(walletAddress);
    }, [walletAddress, contract]);

    return { balance, tokenIds, loading };
}

export default useUserTokens;
