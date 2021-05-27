import React from 'react';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/CardHeader/CardHeader';
import MintButton from '../../components/MintButton/MintButton';

function MainPage() {
    return (
        <>
            <Card>
                <CardHeader text="~ What is this? ~|◕o◕|~ " />
                <p>
                    These little dudes are comprised of 12x12 lines of ASCII text generated entirely
                    on-chain! That's right! When each little punk is minted, a generative algorithm
                    is run to produce a random punk, which you can see an example of here. Each punk
                    is self-contained on the ethereum blockchain. In other words, the NFT itself is
                    the art.
                </p>
            </Card>
            <MintButton />
            <Card>
                <CardHeader text="~ Pricing" />
                <p>
                    There will be 5000 ASCIIFaces minted. They are priced on the following curve:
                    <br />
                    <br />
                    ~ 1 - 1000: 0.025 ETH
                    <br />
                    ~ 1001 - 2000: 0.05 ETH
                    <br />
                    ~ 2001 - 3000: 0.1 ETH
                    <br />
                    ~ 3001 - 4000: 0.2 ETH
                    <br />~ 4001 - 5000: 0.4 ETH
                </p>
            </Card>
            <Card>
                <CardHeader text="~ About" />
                <p>
                    The ASCIIPunks grew out of a realization that many of the NFT's we trade and
                    collect today are nothing more than tokens with a hardcoded link to a
                    centralized server containing metadata. With many NFT's on the market, you have
                    to trust that whoever is hosting the actual image keeps their promise to host
                    the artwork for the entire life of the ethereum blockchain.
                    <br />
                    <br />
                    As an on-chain maximalist, I find the idea of trusting centralized services to
                    host artwork that I own entirely too custodial, and against the overall ethos of
                    crypto and decentralization. What value can an NFT really have, so long as the
                    token itself is not inseparable from the art in question? It is this question
                    that led to the development of ASCIIPunks.
                    <br />
                    <br />
                    So if you are an on-chain maximalist, a decentralization junkie, or a real OG
                    crypto head, this is the project for you.
                </p>
            </Card>
        </>
    );
}

export default MainPage;
