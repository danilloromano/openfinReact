import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import drawerReducer from '../redux/reducers/drawer-reducer';
import Home from '../components/pages/home'

let store = createStore(drawerReducer);

const MyRoutes = () => {
    return (
        <Router>
            <Switch>
                <Provider store={store}>
                    <Route path="/" component={Home} />
                </Provider>
            </Switch>
        </Router>
    )
}

export default MyRoutes