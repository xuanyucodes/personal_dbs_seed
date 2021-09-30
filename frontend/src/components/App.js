import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Store from './Store';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="ui container">
            <Router>
                <div>
                    <Switch>
                        {/* <Route path="/" exact render={
                            () => isLoggedIn? <Redirect to="/home"/> : <Login path="/login" setIsLoggedIn/>}
                        /> */}
                        <Route path="/" exact component={Store} />
                        <Route path="/cart" exact component={Store} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;