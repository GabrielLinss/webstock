import React from 'react';
import Header from '../../components/Header';
import Form from '../../components/Form';
import { Animated } from "react-animated-css";

function NewProduct() {
    return (
        <>
            <Header />
            <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOutLeft"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <Form />
            </Animated>
        </>
    );
}

export default NewProduct;
