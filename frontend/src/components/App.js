import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Store from './Store';
import Header from './Header';
import Product from './Product';
import Checkout from './Checkout';
import Login from './Login';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="ui container">
            <Router>
                <Header/>
                <Switch>
                        <Route path="/checkout" exact render={
                            () => isLoggedIn? <Redirect to="/checkout"/> : <Login path="/login" setIsLoggedIn/>}
                        />
                        <Route path="/" exact component={Store} />
                        <Route path="/products/:id" exact component={Product} />
                        <Route path="/checkout" exact component={Checkout} />
                    </Switch>
            </Router>
        </div>
    );
};

export default App;