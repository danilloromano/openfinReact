import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/pages/home'

const MyRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default MyRoutes