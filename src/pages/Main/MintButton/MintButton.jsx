import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Button from '../../../components/Button/Button';
import useAllowance from '../../../hooks/useAllowance';
import useBalance from '../../../hooks/useBalance';
import useContract from '../../../hooks/useContract';
import useWeb3 from '../../../hooks/useWeb3';

const customStyles = {
    content: {
        backgroundColor: 'var(--grey)',
        top: '50%',
        bottom: 'auto',
        boxShadow: '4px 5px var(--mandarin)',
        left: '50%',
        marginRight: '-50%',
        right: 'auto',
        transform: 'translate(-50%, -50%)'
        // display: 'flex'
    }
};

function MintButton() {
    const { price } = useContract();
    const { connected, handleConnect } = useWeb3();
    const [modalOpen, setModalOpen] = useState(false);
    const { weth, eth } = useBalance();
    const { allowance, approve, loading } = useAllowance();

    let priceText;

    if (price.priceWei === BigNumber.from(0)) {
        priceText = 'Loading';
    } else {
        priceText = price.priceEther;
    }

    const handleOpen = () => {
        if (!connected) return handleConnect();

        setModalOpen(true);
    };

    const handleMint = async () => {
        if (Number(formatEther(allowance)) < 1000) {
            console.log('increase allowance');
            await approve();
        }
    };

    const mintButton = () => {
        if (loading) {
            return 'Loading ...';
        }
        if (Number(formatEther(allowance)) < 1000) {
            return 'Approve';
        }
        return 'Proceed';
    };

    return (
        <>
            <button className="mint-btn" onClick={handleOpen}>
                {connected ? `Mint 1 ASCII Faces for ${priceText} ETH` : 'Please connect to wallet'}
            </button>
            <ReactModal
                style={customStyles}
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}>
                <p className="text-center">
                    What seed number would you like to use to generate your Faces?
                </p>
                <p className="text-center text-mandarin">
                    Warning: Do not use decimals, the seed must be an integer
                </p>
                <div className="flex w-full">
                    <input
                        type="text"
                        className="flex-grow h-8 shadow-superiority px-2 focus:outline-none"
                    />
                    <button className="text-base h-8 px-2 bg-mandarin shadow-superiority focus:outline-none hover-transition">
                        Random Seed
                    </button>
                </div>
                <div className="flex mt-4 justify-between">
                    <div>
                        <h1>Balance (Mainnet): {formatEther(eth)} ETH</h1>
                        <h1>Balance (Matic) : {formatEther(weth)} ETH</h1>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                window.open('https://wallet.matic.network/bridge', '_blank');
                            }}
                            className="bg-mandarin shadow-superiority px-1 hover-transition">
                            Move ETH to Matic
                        </button>
                    </div>
                </div>
                <div className="flex mt-5">
                    <Button disabled={loading} onClick={handleMint}>
                        {mintButton()}
                    </Button>
                </div>
            </ReactModal>
        </>
    );
}

export default MintButton;
