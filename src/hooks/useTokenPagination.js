import { useCallback, useEffect, useState } from 'react';

function useTokenPagination(totalSupply) {
    const [tokenIds, setTokenIds] = useState([]);

    const rangeFrom = useCallback(
        (x) => {
            const endingId = x + 8;

            return [...Array(totalSupply + 1).keys()].slice(x, endingId);
        },
        [totalSupply]
    );

    const handleNextPage = () => {
        setTokenIds((ids) => {
            if (ids[ids.length - 1] === totalSupply) return [];

            return rangeFrom(ids[ids.length - 1] + 1);
        });
    };

    const handlePrevPage = () => {
        setTokenIds((ids) => {
            if (ids[0] === 1) return rangeFrom(totalSupply - 3);

            return rangeFrom(ids[0] - 8);
        });
    };

    useEffect(() => {
        if (totalSupply <= 0) return;

        const startingId = tokenIds[0] !== undefined ? tokenIds[0] : 1;
        const newTokenIds = rangeFrom(startingId);

        if (tokenIds[0] === undefined) {
            setTokenIds(newTokenIds);
        }

        console.log('token ids', tokenIds);
    }, [totalSupply, tokenIds, rangeFrom]);

    return { handleNextPage, handlePrevPage, tokenIds };
}

export default useTokenPagination;
