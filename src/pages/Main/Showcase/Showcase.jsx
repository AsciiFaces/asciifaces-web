import React from 'react';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import FaceCard from '../../../components/FaceCard/FaceCard';

import useContract from '../../../hooks/useContract';
import useTokenPagination from '../../../hooks/useTokenPagination';

function Showcase() {
    const { totalSupply, tokenLimit } = useContract();

    const { handleNextPage, handlePrevPage, tokenIds } = useTokenPagination(totalSupply);

    const Loading = () => {
        return (
            <Card>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-xl">Showcase</h3>
                    <h3 className="font-semibold text-xl">
                        {totalSupply} / {tokenLimit} Minted
                    </h3>
                </div>
                <div className="w-full flex justify-center">
                    <h2>Loading...</h2>
                </div>
            </Card>
        );
    };

    if (totalSupply <= 0) return <Loading />;

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
