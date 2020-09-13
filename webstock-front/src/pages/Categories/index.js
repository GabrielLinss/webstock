import React from 'react';
import CategoriesTable from '../../components/CategoriesTable';
import Header from '../../components/Header'
import { Animated } from 'react-animated-css'
import { Helmet } from "react-helmet";

function Categories() {
    return (
        <>
            <Helmet>
                <title>Webstock - Categorias</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <CategoriesTable />
            </Animated>
        </>
    )
}

export default Categories;
