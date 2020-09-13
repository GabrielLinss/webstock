import React from 'react';
import { Container } from './styles';
import { FiLogOut } from 'react-icons/fi';
import { FaBoxes, FaHome } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { getUserName, logout } from '../../services/auth';

function Header() {
    const history = useHistory()

    function handleLogout() {
        if (window.confirm('Deseja realmente sair ?')) {
            logout();

            history.push('/login');
        }
    }

    return (
        <Container>
            <div className="banner">
                <FaBoxes color="white" size={22} />
                <span>Olá, {getUserName()}</span>
            </div>

            <div className="buttons">
                <button type="button" onClick={() => history.push('/')}>
                    <FaHome size={18} color="#fff" />
                </button>
                <button type="button" onClick={handleLogout}>
                    <FiLogOut size={18} color="#fff" />
                </button>
            </div>
        </Container>
    );
}

export default Header;
