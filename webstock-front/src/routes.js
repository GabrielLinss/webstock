import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import Costumers from './pages/Costumers';
import NewCostumer from './pages/NewCostumer';
import Products from './pages/Products';
import { isAuthenticated } from './services/auth';
import Categories from './pages/Categories'
import Users from './pages/Users'
import Accounts from './pages/Accounts'
import NewAccount from './pages/NewAccount'

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
                <PrivateRoute path="/produtos" exact component={Products} />
                <PrivateRoute path="/novo-produto" exact component={NewProduct} />
                <PrivateRoute path="/clientes" exact component={Costumers} />
                <PrivateRoute path="/novo-cliente" exact component={NewCostumer} />
                <PrivateRoute path="/categorias" exact component={Categories} />
                <PrivateRoute path="/usuarios" exact component={Users} />
                <PrivateRoute path="/contas" exact component={Accounts} />
                <PrivateRoute path="/nova-conta" exact component={NewAccount} />
            </Switch>
        </BrowserRouter>
    );
}
