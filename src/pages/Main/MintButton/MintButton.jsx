import { BigNumber } from '@ethersproject/bignumber';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Button from '../../../components/Button/Button';
import useContract from '../../../hooks/useContract';

const customStyles = {
    content: {
        backgroundColor: 'var(--grey)',
        bottom: 'auto',
        boxShadow: '4px 5px var(--mandarin)',
        left: '50%',
        marginRight: '-50%',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%, -100%)',
        overflowY: 'hidden'
    }
};

function MintButton() {
    const { price } = useContract();
    const [modalOpen, setModalOpen] = useState(true);

    let priceText;

    if (price.priceWei === BigNumber.from(0)) {
        priceText = 'Loading';
    } else {
        priceText = price.priceEther;
    }

    return (
        <>
            <button className="mint-btn" onClick={() => setModalOpen(true)}>
                Mint 1{' '}
                <span
                    className="font-play font-extrabold text-white"
                    style={{
                        //   textShadow: "4px 6px var(--superiority),6px 8px var(--corn)",
                        textShadow: '4px 4px var(--superiority)'
                    }}>
                    ASCII FACES
                </span>{' '}
                for {priceText} ETH
            </button>
            <ReactModal
                style={customStyles}
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}>
                <p>What seed number would you like to use to generate your Faces?</p>
                <div className="flex">
                    <input type="text" className="h-8 w-60 shadow-superiority px-2" />
                    <button className="text-base m-auto h-8 font-bold px-2 bg-mandarin shadow-superiority focus:outline-none hover-transition">
                        Random Seed
                    </button>
                </div>
                <div className="flex mt-5">
                    <Button>Please Connect Wallet</Button>
                </div>
            </ReactModal>
        </>
    );
}

export default MintButton;
