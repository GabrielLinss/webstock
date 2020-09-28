import React from 'react'
import { Animated } from "react-animated-css";
import Header from '../../components/Header';
import { Helmet } from "react-helmet";
import SettingsPanel from '../../components/SettingsPanel'

export default function Settings() {
    return (
        <>
            <Helmet>
                <title>Webstock - Configurações</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOutLeft"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <SettingsPanel/>
            </Animated>
        </>
    )
}
