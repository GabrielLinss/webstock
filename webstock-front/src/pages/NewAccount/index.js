import React from 'react';
import Header from '../../components/Header';
import NewAccountForm from '../../components/NewAccountForm';
import { Animated } from "react-animated-css";
import { Helmet } from "react-helmet";

function NewAccount() {
    return (
        <>
            <Helmet>
                <title>Webstock - Nova conta</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <NewAccountForm />
            </Animated>
        </>
    );
}

export default NewAccount;
