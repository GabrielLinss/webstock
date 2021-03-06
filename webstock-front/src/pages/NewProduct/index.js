import React from 'react';
import Header from '../../components/Header';
import NewProductForm from '../../components/NewProductForm';
import { Animated } from "react-animated-css";
import { Helmet } from "react-helmet";

function NewProduct() {
    return (
        <>
            <Helmet>
                <title>Webstock - Novo produto</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <NewProductForm />
            </Animated>
        </>
    );
}

export default NewProduct;
