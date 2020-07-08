import React from 'react';
import Header from '../../components/Header';
import ProductsTable from '../../components/ProductsTable';
import { Animated } from "react-animated-css";

function Dashboard() {
    return (
        <>
            <Header />
            <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOutLeft"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <ProductsTable />
            </Animated>
        </>
    );
}

export default Dashboard;
