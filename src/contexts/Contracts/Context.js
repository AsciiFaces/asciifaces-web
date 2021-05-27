import { createContext } from 'react';

const ContractContext = createContext({
    totalSupply: Number,
    tokenLimit: Number
});

export default ContractContext;
