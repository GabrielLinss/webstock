import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import Costumers from './pages/Costumers';
import NewCostumer from './pages/NewCostumer';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
        }
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/" exact component={Dashboard} />
                <PrivateRoute path="/new-product" exact component={NewProduct} />
                <PrivateRoute path="/costumers" exact component={Costumers} />
                <PrivateRoute path="/new-costumer" exact component={NewCostumer} />
            </Switch>
        </BrowserRouter>
    );
}
