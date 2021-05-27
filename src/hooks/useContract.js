import { useContext } from 'react';
import ContractContext from '../contexts/Contracts/Context';

const useContract = () => {
    return useContext(ContractContext);
};

export default useContract;
