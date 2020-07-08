import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import { FiLogOut } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { getUserName, logout, isAuthenticated } from '../../services/auth';

function Header() {
    const history = useHistory();

    function handleLogout() {
        logout();

        history.push('/login');
    }

    return (
        <Container>
            <img src={logo} alt="Web Estoque" />
            { isAuthenticated() ?
            <>
                <span>Olá, { getUserName() }</span>

                <Link to="/new">Lançar novo produto</Link>

                <button type="button" onClick={handleLogout}>
                    <FiLogOut size={18} color="#fff" />
                </button>
            </>
            : '' }
        </Container>
    );
}

export default Header;
