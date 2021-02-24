import React from 'react';
import Home from '../components/pages/Home';
import Vodka from '../components/pages/Vodka';
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