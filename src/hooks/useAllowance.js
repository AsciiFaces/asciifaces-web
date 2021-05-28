import { useCallback, useEffect, useState } from 'react';
import useContract from './useContract';
import useWeb3 from './useWeb3';

function useAllowance() {
    const CONTRACT_ADDRESS = import.meta.env.SNOWPACK_PUBLIC_CONTRACT_ADDRESS;
    const { wethContract } = useContract();
    const { walletAddress, wallet } = useWeb3();
    const [loading, setLoading] = useState(true);
    const [allowance, setAllowance] = useState(0);

    const approve = useCallback(async () => {
        setLoading(true);
        try {
            console.log(wallet);
            console.log(wethContract);
            await wethContract.connect(wallet).approve(CONTRACT_ADDRESS, walletAddress);
        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
        setLoading(false);
    }, [CONTRACT_ADDRESS, wallet, walletAddress, wethContract]);

    useEffect(() => {
        async function fetchAllowance() {
            const allowance = await wethContract.allowance(walletAddress, CONTRACT_ADDRESS);

            setLoading(false);
            setAllowance(allowance);
        }

        if (!walletAddress) return;

        fetchAllowance();
    }, [CONTRACT_ADDRESS, walletAddress, wethContract]);

    return { allowance, loading, approve };
}

export default useAllowance;
