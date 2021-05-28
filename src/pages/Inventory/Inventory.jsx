import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import FaceCard from '../../components/FaceCard/FaceCard';
import useUserTokens from '../../hooks/useUserTokens';
import useWeb3 from '../../hooks/useWeb3';

function InventoryPage() {
    const { connected, handleConnect } = useWeb3();
    const { balance, tokenIds, loading } = useUserTokens();
    // const { handlePrevPage, handleNextPage, tokenIds } = useTokenPagination(10);
    console.log(balance, tokenIds, loading);

    const Loading = () => {
        return (
            <Card>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-md sm:text-2xl">My Faces</h3>
                    <h3 className="font-semibold text-md sm:text-2xl">~|◕o◕|~</h3>
                    <h3 className="font-semibold text-md sm:text-2xl">{balance} Faces</h3>
                </div>
                <div className="flex justify-center w-full mt-12 mb-8">
                    <h1>Loading...</h1>
                </div>
            </Card>
        );
    };

    const NotConnected = () => {
        return (
            <Card>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-md sm:text-2xl">My Faces</h3>
                    <h3 className="font-semibold text-md sm:text-2xl">~|◕o◕|~</h3>
                    <h3 className="font-semibold text-md sm:text-2xl">{balance} Faces</h3>
                </div>
                <div className="flex justify-center w-full mt-12 mb-8">
                    <Button onClick={handleConnect}>Connect Wallet</Button>
                </div>
            </Card>
        );
    };

    if (!connected) return <NotConnected />;

    if (loading) return <Loading />;

    return (
        <Card>
            <div className="flex justify-between">
                <h3 className="font-semibold text-md sm:text-2xl">My Faces</h3>
                <h3 className="font-semibold text-md sm:text-2xl">~|◕o◕|~</h3>
                <h3 className="font-semibold text-md sm:text-2xl">{balance} Faces</h3>
            </div>
            {balance > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-8 w-full mt-8">
                    {tokenIds.map((id) => (
                        <FaceCard id={id} key={id} />
                    ))}
                </div>
            ) : (
                <div className="w-full flex justify-center py-12">
                    <h1>You do not have any ASCII Faces yet, sorry :(</h1>
                </div>
            )}
        </Card>
    );
}

export default InventoryPage;
