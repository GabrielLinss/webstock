import React, { useState } from 'react';
import { Container } from './styles';
import { FiLogOut } from 'react-icons/fi';
import { FaBoxes } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { getUserName, logout } from '../../services/auth';
import Modal from '../../components/Modal'

function Header() {
    const history = useHistory()

    const [showModal, setShowModal] = useState(false)

    function handleLogout() {
        logout();

        history.push('/login');
    }

    return (
        <>
            <Modal show={showModal} close={() => setShowModal(false)} confirm={handleLogout}>
                Deseja realmente sair ?
            </Modal>

            <Container>
                <div className="banner">
                    <FaBoxes color="white" size={22} />
                    <span>Olá, {getUserName()}</span>
                </div>

                <div className="buttons">
                    <Link to="/">Produtos</Link>
                    <Link to="/costumers">Clientes</Link>
                    <button type="button" onClick={() => setShowModal(true)}>
                        <FiLogOut size={18} color="#fff" />
                    </button>
                </div>
            </Container>
        </>
    );
}

export default Header;
