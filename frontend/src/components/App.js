import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Store from './Store';
import Header from './Header';
import Product from './Product';
import Checkout from './Checkout';
import Login from './Login';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState({}); // to track shopping cart purchases of format {pdt_id: qty}

    return (
        <div className="ui container">
            <Router>
                <Header/>
                <Switch>
                        <Route path="/loginorcheckout" exact render={
                            () => isLoggedIn? <Redirect to="/checkout"/> : <Login path="/login" setIsLoggedIn={setIsLoggedIn}/>}
                        />
                        <Route path="/" exact render={() => <Store cart={cart} setCart={setCart}/>} />
                        <Route path="/products/:id" exact component={Product} />
                        <Route path="/checkout" exact render={() => <Checkout cart={cart} setCart={setCart}/>} />
                    </Switch>
            </Router>
        </div>
    );
};

export default App;