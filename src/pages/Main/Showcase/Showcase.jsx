import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import FaceCard from '../../../components/FaceCard/FaceCard';

import useContract from '../../../hooks/useContract';

function Showcase() {
    const { totalSupply, tokenLimit } = useContract();
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

    //pre fetch images
    useEffect(() => {
        const keys = [...Array(totalSupply).keys()];
        keys.forEach((id) => {
            const img = new Image();
            img.src = `http://localhost:3000/faces/${id + 1}/image.svg`;
        });
    }, [totalSupply]);

    if (totalSupply <= 0) return null;

    return (
        <Card>
            <div className="flex justify-between">
                <h3 className="font-semibold text-xl">Showcase</h3>
                <h3 className="font-semibold text-xl">
                    {totalSupply} / {tokenLimit} Minted
                </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8 w-full mt-8">
                {tokenIds.map((id) => (
                    <FaceCard id={id} key={id} />
                ))}
            </div>
            <div className="flex m-auto w-1/2 justify-center mt-8">
                <Button onClick={handlePrevPage}>PREV</Button>
                <Button onClick={handleNextPage}>NEXT</Button>
            </div>
        </Card>
    );
}

export default Showcase;
