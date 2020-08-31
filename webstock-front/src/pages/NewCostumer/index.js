import React from 'react';
import Header from '../../components/Header';
import NewCostumerForm from '../../components/NewCostumerForm';
import { Animated } from "react-animated-css";

function NewProduct() {
    return (
        <>
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
