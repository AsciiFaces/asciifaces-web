import { BigNumber, ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';
import ContractContext from './Context';
import AsciiFaces from '../../abis/AsciiFaces';
import ERC20ABI from '../../abis/ERC20';

// eslint-disable-next-line react/prop-types
function ContractProvider({ children }) {
    const [contract, setContract] = useState(undefined);
    const [wethContract, setWethContract] = useState(undefined);
    const [totalSupply, setTotalSupply] = useState(0);
    const [tokenLimit, setTokenLimit] = useState(0);
    const [price, setPrice] = useState({ priceWei: BigNumber.from(0), priceEther: '0.0' });

    const fetchSupply = useCallback(async () => {
        const totalSupply = Number(await contract.totalSupply());
        const tokenLimit = Number(await contract.MAX_SUPPLY());

        return { totalSupply, tokenLimit };
    }, [contract]);

    const fetchPrice = useCallback(async () => {
        const priceWei = await contract.calculatePrice();
        const priceEther = ethers.utils.formatEther(priceWei);

        return { priceWei, priceEther };
    }, [contract]);

    const fetchData = useCallback(async () => {
        const { totalSupply, tokenLimit } = await fetchSupply();
        const { priceEther, priceWei } = await fetchPrice();

        setPrice({
            priceEther,
            priceWei
        });

        setTotalSupply(totalSupply);
        setTokenLimit(tokenLimit);
    }, [fetchSupply, fetchPrice]);

    const fetchWethBalance = useCallback(
        async (address) => {
            if (!wethContract) return 0;

            const balance = await wethContract.balanceOf(address);

            return balance;
        },
        [wethContract]
    );

    useEffect(() => {
        const RPC_URL = import.meta.env.SNOWPACK_PUBLIC_MATIC_RPC;
        const CONTRACT_ADDRESS = import.meta.env.SNOWPACK_PUBLIC_CONTRACT_ADDRESS;

        const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, AsciiFaces.abi, provider);

        const WETH = new ethers.Contract(
            '0x2d7882bedcbfddce29ba99965dd3cdf7fcb10a1e',
            ERC20ABI,
            provider
        );

        setWethContract(WETH);
        setContract(contract);
    }, []);

    useEffect(() => {
        if (!contract) return;
        fetchData();
    }, [fetchData, contract]);

    return (
        <ContractContext.Provider
            value={{ totalSupply, tokenLimit, contract, price, fetchWethBalance }}>
            {children}
        </ContractContext.Provider>
    );
}

export default ContractProvider;
