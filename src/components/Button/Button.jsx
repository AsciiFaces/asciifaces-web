import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ children }) {
    return (
        <button className="text-lg m-auto font-bold py-2 px-6 bg-mandarin shadow-superiority focus:outline-none hover-transition">
            {children}
        </button>
    );
}

export default Button;
