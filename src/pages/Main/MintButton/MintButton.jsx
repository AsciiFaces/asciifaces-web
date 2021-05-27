import React from 'react';

function MintButton() {
    return (
        <>
            <button className="mint-btn">
                Mint 1{' '}
                <span
                    className="font-play font-extrabold text-white"
                    style={{
                        //   textShadow: "4px 6px var(--superiority),6px 8px var(--corn)",
                        textShadow: '4px 4px var(--superiority)'
                    }}>
                    ASCII FACES
                </span>{' '}
                for 0.025 ETH
            </button>
        </>
    );
}

export default MintButton;
