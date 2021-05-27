import React from 'react';
import Card from '../Card/Card';

function NotFound() {
    return (
        <Card>
            <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-extrabold">\(o_o)/</span>
                <h1>404 NOT FOUND</h1>
            </div>
        </Card>
    );
}

export default NotFound;
