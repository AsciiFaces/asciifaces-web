import { useEffect, useState } from 'react';
import useContract from './useContract';
import useWeb3 from './useWeb3';

function useBalance() {
    const [weth, setWeth] = useState(0);
    const [eth, setEth] = useState(0);
    const [loading, setLoading] = useState(true);
    const { fetchWethBalance } = useContract();
    const { walletAddress, wallet } = useWeb3();

    useEffect(() => {
        async function fetch(address) {
            const wethBalance = await fetchWethBalance(address);
            const ethBalance = await wallet.getBalance();

            console.log(ethBalance);

            setWeth(wethBalance);
            setEth(ethBalance);
            setLoading(false);
        }

        if (!walletAddress || !wallet) return;

        fetch(walletAddress);
    }, [fetchWethBalance, walletAddress, wallet]);

    return { weth, eth, loading };
}

export default useBalance;
