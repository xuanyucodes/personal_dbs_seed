import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Store from './Store';
import Header from './Header';

const App = () => {

    return (
        <div className="ui container">
            <Router>
                <Header/>
                <Switch>
                        {/* <Route path="/" exact render={
                            () => isLoggedIn? <Redirect to="/home"/> : <Login path="/login" setIsLoggedIn/>}
                        /> */}
                        <Route path="/" exact component={Store} />
                        <Route path="/cart" exact component={Store} />
                    </Switch>
            </Router>
        </div>
    );
};

export default App;