import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import FaceCard from '../../components/FaceCard/FaceCard';

function InventoryPage() {
    const totalSupply = 100;

    const [ids, setIds] = useState([]);

    const rangeFrom = (x) => {
        const endingId = x + 8;

        return [...Array(totalSupply + 1).keys()].slice(x, endingId);
    };

    const handleNext = () => {
        setIds((ids) => {
            if (ids[ids.length - 1] == totalSupply) return [];

            return rangeFrom(ids[ids.length - 1] + 1);
        });
    };

    const handlePrev = () => {
        setIds((ids) => {
            if (ids[0] == 1) return rangeFrom(totalSupply - 3);

            return rangeFrom(ids[0] - 8);
        });
    };

    useEffect(() => {
        const startingId = ids[0] === null ? ids[0] : 1;
        const newIds = rangeFrom(startingId);

        if (!ids[0]) setIds(newIds);
    }, [ids, totalSupply]);

    return (
        <>
            <Card>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-md sm:text-2xl">My Faces</h3>
                    <h3 className="font-semibold text-md sm:text-2xl">~|◕o◕|~</h3>
                    <h3 className="font-semibold text-md sm:text-2xl">{totalSupply} Faces</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8 w-full mt-8">
                    {ids.map((id) => (
                        <FaceCard id={id} key={id} />
                    ))}
                </div>
                <div className="flex m-auto w-1/2 justify-center mt-8">
                    <Button onClick={handlePrev}>PREV</Button>
                    <Button onClick={handleNext}>NEXT</Button>
                </div>
            </Card>
        </>
    );
}

export default InventoryPage;
