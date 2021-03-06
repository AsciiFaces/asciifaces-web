import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Main/Main';
import FacePage from './Faces/Faces';
import InventoryPage from './Inventory/Inventory';

import NotFound from '../components/NotFound/NotFound';
import Navigation from '../components/Navigation/Navigation';
import Title from '../components/Title/Title';
import Web3Provider from '../contexts/Web3/Provider';
import ContractProvider from '../contexts/Contracts/Provider';

function App() {
    return (
        <Router>
            <Web3Provider>
                <ContractProvider>
                    <Navigation />
                    <div className="bg-violet min-h-screen h-full flex flex-col pt-14">
                        <Title />
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route exact path="/faces/:id" component={FacePage} />
                            <Route exact path="/inventory" component={InventoryPage} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </ContractProvider>
            </Web3Provider>
        </Router>
    );
}

export default App;
