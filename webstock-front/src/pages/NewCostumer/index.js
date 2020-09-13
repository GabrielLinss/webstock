import React from 'react';
import Header from '../../components/Header';
import NewCostumerForm from '../../components/NewCostumerForm';
import { Animated } from "react-animated-css";
import { Helmet } from "react-helmet";

function NewProduct() {
    return (
        <>
            <Helmet>
                <title>Webstock - Novo cliente</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <NewCostumerForm />
            </Animated>
        </>
    );
}

export default NewProduct;
