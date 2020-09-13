import React from 'react';
import ProductsTable from '../../components/ProductsTable';
import { Animated } from "react-animated-css";
import Header from '../../components/Header';
import { Helmet } from "react-helmet";

function Products() {
    return (
        <>
            <Helmet>
                <title>Webstock - Produtos</title>
            </Helmet>
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
    )
}

export default Products;
