import { useEffect, useState } from 'react';
import useContract from './useContract';

function useFetchOwner(tokenId) {
    const { contract } = useContract();
    const [loading, setLoading] = useState(true);
    const [owner, setOwner] = useState(null);

    useEffect(() => {
        if (!contract) return;

        async function loadOwner(id) {
            const owner = await contract.ownerOf(id);

            setLoading(false);
            setOwner(owner);
        }

        loadOwner(tokenId);
    });

    return { loading, owner };
}

export default useFetchOwner;
