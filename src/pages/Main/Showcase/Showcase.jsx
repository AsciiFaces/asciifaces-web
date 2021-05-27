import React from 'react';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import FaceCard from '../../../components/FaceCard/FaceCard';

function Showcase() {
    return (
        <Card>
            <div className="flex justify-between">
                <h3 className="font-semibold text-xl">Showcase</h3>
                <h3 className="font-semibold text-xl">1 / 5000 Minted</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8 w-full mt-8">
                <FaceCard />
                <FaceCard />
                <FaceCard />
                <FaceCard />
                <FaceCard />
                <FaceCard />
                <FaceCard />
                <FaceCard />
            </div>
            <div className="flex m-auto w-1/2 justify-center mt-8">
                <Button>PREV</Button>
                <Button>NEXT</Button>
            </div>
        </Card>
    );
}

export default Showcase;
