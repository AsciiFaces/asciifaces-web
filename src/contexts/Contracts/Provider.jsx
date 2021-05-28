import { BigNumber, ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';
import ContractContext from './Context';
import AsciiFaces from '../../abis/AsciiFaces';

// eslint-disable-next-line react/prop-types
function ContractProvider({ children }) {
    const [contract, setContract] = useState(undefined);
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

    useEffect(() => {
        const contract = new ethers.Contract(
            '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
            AsciiFaces.abi,
            new ethers.providers.JsonRpcProvider('http://localhost:8545')
        );

        setContract(contract);
    }, []);

    useEffect(() => {
        if (!contract) return;
        fetchData();
    }, [fetchData, contract]);

    return (
        <ContractContext.Provider value={{ totalSupply, tokenLimit, contract, price }}>
            {children}
        </ContractContext.Provider>
    );
}

export default ContractProvider;
