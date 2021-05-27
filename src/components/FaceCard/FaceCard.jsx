import React from 'react';

// eslint-disable-next-line react/prop-types
function FaceCard({ id }) {
    const handleClick = () => {
        window.open('/faces/' + id, '_blank');
    };

    return (
        <div
            role="button"
            onClick={handleClick}
            className="bg-white border border-grey shadow-mandarin hover-transition cursor-pointer">
            <img
                // className="w-full h-5/6 bg-red-600 relative"
                src={`http://localhost:3000/faces/${id}/image.svg`}
                alt=""
            />
            <div className="w-full px-3 py-2 bg-white">
                <span className="text-base">Faces #{id}</span>
            </div>
        </div>
    );
}

export default FaceCard;
