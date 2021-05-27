import React from 'react';
import { useParams } from 'react-router';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function FacePage() {
    const { id } = useParams();

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
                    <h3 className="mb-4">Owned By 0x6761BcAF2b2156C058634D9772F07374D6eDeF1d</h3>
                    <Button>View on Opensea</Button>
                </div>
            </Card>
        </>
    );
}

export default FacePage;
