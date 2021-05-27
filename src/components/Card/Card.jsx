import React from 'react';

// eslint-disable-next-line react/prop-types
function Card({ id, children }) {
    return (
        <div
            id={id}
            className="bg-grey w-10/12 mx-auto shadow-superiority mb-10 px-6 md:px-12 py-6 sm:py-10">
            {children}
        </div>
    );
}

export default Card;
