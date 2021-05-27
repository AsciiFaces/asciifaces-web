import { BigNumber } from '@ethersproject/bignumber';
import React from 'react';
import useContract from '../../../hooks/useContract';

function MintButton() {
    const { price } = useContract();

    let priceText;

    if (price.priceWei === BigNumber.from(0)) {
        priceText = 'Loading';
    } else {
        priceText = price.priceEther;
    }

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
                for {priceText}
            </button>
        </>
    );
}

export default MintButton;
