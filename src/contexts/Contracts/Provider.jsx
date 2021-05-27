import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';
import ContractContext from './Context';
import AsciiFaces from '../../abis/AsciiFaces.json';

// eslint-disable-next-line react/prop-types
function ContractProvider({ children }) {
    const [contract, setContract] = useState(undefined);
    const [totalSupply, setTotalSupply] = useState(0);
    const [tokenLimit, setTokenLimit] = useState(0);

    const fetchSupply = useCallback(async () => {
        const totalSupply = Number(await contract.totalSupply());
        const tokenLimit = Number(await contract.MAX_SUPPLY());

        return { totalSupply, tokenLimit };
    }, [contract]);

    const fetchData = useCallback(async () => {
        const { totalSupply, tokenLimit } = await fetchSupply();

        setTotalSupply(totalSupply);
        setTokenLimit(tokenLimit);
    }, [fetchSupply]);

    useEffect(() => {
        const contract = new ethers.Contract(
            '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
            AsciiFaces.abi,
            new ethers.providers.JsonRpcProvider()
        );

        setContract(contract);
    }, []);

    useEffect(() => {
        if (!contract) return;
        fetchData();
    }, [fetchData, contract]);

    return (
        <ContractContext.Provider value={{ totalSupply, tokenLimit }}>
            {children}
        </ContractContext.Provider>
    );
}

export default ContractProvider;
