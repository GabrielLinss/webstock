import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import { isAuthenticated } from './services/auth';
import Login from './pages/Login';

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
                <PrivateRoute path="/new" exact component={NewProduct} />
            </Switch>
        </BrowserRouter>
    );
}
