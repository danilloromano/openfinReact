import React from 'react';
import Home from '~/pages/Home';
import Vodka from '~/pages/Vodka';
import DrinkPage from '~/pages/DrinkPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MyRoutes = (drink_id) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/vodka" component={Vodka} />
                <Route exact path='/drink/:id' component={DrinkPage} />
            </Switch>
        </Router>
    )
}

export default MyRoutes