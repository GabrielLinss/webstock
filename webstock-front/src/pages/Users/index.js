import React from 'react';
import UsersTable from '../../components/UsersTable';
import Header from '../../components/Header'
import { Animated } from 'react-animated-css'
import { Helmet } from "react-helmet";

function Users() {
    return (
        <>
            <Helmet>
                <title>Webstock - Usuários</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <UsersTable />
            </Animated>
        </>
    )
}

export default Users;
