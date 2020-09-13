import React from 'react';
import AccountsTable from '../../components/AccountsTable';
import Header from '../../components/Header'
import { Animated } from 'react-animated-css'
import { Helmet } from "react-helmet";

function Accounts() {
    return (
        <>
            <Helmet>
                <title>Webstock - Contas</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <AccountsTable />
            </Animated>
        </>
    )
}

export default Accounts;
