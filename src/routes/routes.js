import React from 'react';
import Home from '~/pages/Home';
import Vodka from '~/pages/Vodka';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MyRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/vodka" component={Vodka} />
            </Switch>
        </Router>
    )
}

export default MyRoutes