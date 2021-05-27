import React from 'react';

function FaceCard() {
    return (
        <div className="bg-white border border-grey shadow-mandarin hover-transition cursor-pointer">
            <img
                className=""
                src="https://via.placeholder.com/350/000000/FFFFFF/?text=AsciiFaces"
                alt=""
            />
            <div className="w-full px-3 py-2 bg-white">
                <span className="text-base">ASCII Faces #1</span>
            </div>
        </div>
    );
}

export default FaceCard;
