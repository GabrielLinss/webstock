import React from 'react';
import CostumersTable from '../../components/CostumersTable';
import Header from '../../components/Header'
import { Animated } from 'react-animated-css'
import { Helmet } from "react-helmet";

function Costumers() {
    return (
        <>
            <Helmet>
                <title>Webstock - Clientes</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <CostumersTable />
            </Animated>
        </>
    )
}

export default Costumers;
