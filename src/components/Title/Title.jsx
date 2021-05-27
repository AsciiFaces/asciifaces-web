import React from 'react';
import { Link } from 'react-router-dom';

function Title() {
    return (
        <div to="/" className="w-10/12 m-auto flex justify-center my-8 text-6xl sm:text-8xl">
            <Link
                to="/"
                className="text-white font-play font-extrabold "
                style={{
                    //   textShadow: "4px 6px var(--superiority),6px 8px var(--corn)",
                    textShadow: '4px 4px var(--superiority)'
                }}>
                ASCII FACES
            </Link>
        </div>
    );
}

export default Title;
