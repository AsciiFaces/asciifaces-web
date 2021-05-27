import React from 'react';
import { useParams } from 'react-router';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import useContract from '../../hooks/useContract';
import useFetchOwner from '../../hooks/useFetchOwner';

function FacePage() {
    const { id } = useParams();

    const { totalSupply } = useContract();

    const { loading, owner } = useFetchOwner(id);

    const handleOpensea = () => {
        window.open(
            `https://opensea.io/assets/0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7/${id}`,
            '_blank'
        );
    };

    if (Number(id) > totalSupply || Number(id) <= 0) {
        return null;
    }

    return (
        <>
            <Card>
                <div className="w-full flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-semibold">Faces #{id}</h2>
                    <img
                        className="shadow-superiority my-6"
                        src={`http://localhost:3000/faces/${id}/image.svg`}
                        alt=""
                    />
                    <h3 className="mb-4">Owned By {loading ? 'Loading...' : owner}</h3>
                    <Button onClick={handleOpensea}>View on Opensea</Button>
                </div>
            </Card>
        </>
    );
}

export default FacePage;
