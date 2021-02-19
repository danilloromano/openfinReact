import React from 'react';
import Home from '../components/pages/home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MyRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default MyRoutes