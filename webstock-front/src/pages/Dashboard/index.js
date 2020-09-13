import React from 'react';
import Header from '../../components/Header';
import { Animated } from "react-animated-css";
import './styles.css'
import { FaUsers, FaShoppingBasket, FaFolderOpen, FaCogs, FaAddressBook } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Helmet } from "react-helmet";

function Dashboard() {
    const history = useHistory()

    return (
        <>
            <Helmet>
                <title>Webstock - Dashboard</title>
            </Helmet>
            <Header />
            <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOutLeft"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <div id="dashboard">
                    <div className="card" onClick={() => history.push('/produtos')}>
                        <h1>Produtos</h1>
                        <FaShoppingBasket size={60} />
                    </div>
                    <div className="card" onClick={() => history.push('/clientes')}>
                        <h1>Clientes</h1>
                        <FaUsers size={60} />
                    </div>
                    <div className="card" onClick={() => history.push('/categorias')}>
                        <h1>Categorias</h1>
                        <FaFolderOpen size={60} />
                    </div>
                    <div className="card" onClick={() => history.push('/usuarios')}>
                        <h1>Usuários</h1>
                        <FaUsers size={60} />
                    </div>
                    <div className="card" onClick={() => history.push('/contas')}>
                        <h1>Contas</h1>
                        <FaAddressBook size={60} />
                    </div>
                    <div className="card" onClick={() => history.push('/configuracoes')}>
                        <h1>Configurações</h1>
                        <FaCogs size={60} />
                    </div>
                </div>
            </Animated>
        </>
    );
}

export default Dashboard;
