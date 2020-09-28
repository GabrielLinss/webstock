import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import api from '../../services/api';
import { logout, getToken, setUserName } from '../../services/auth';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner'

function SettingsPanel() {
    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const [userId, setUserId] = useState(0)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setLoading(true)

        api.get(`/users/${getToken()}`)
            .then(response => {
                setUserId(response.data.id)
                setName(response.data.name)
                setEmail(response.data.email)

                setLoading(false)
            }).catch(e => {
                toast.error('Erro ao carregar informações!')
                setLoading(false)

                if (e.response.data) {
                    const status = e.response.data

                    if (status.message === 'Unauthorized') {
                        toast.error('Sessão expirada!')

                        logout()

                        history.push('/login');
                    }
                }
            });
    }, [history]);

    function handleSubmit(event) {
        event.preventDefault();

        setLoading(true)

        api.put(`/users/${userId}`, { name, email })
            .then(response => {
                setLoading(false)
                setUserName(response.data.name)
                toast.success('Informações atualizadas com sucesso!')
            })
            .catch(e => {
                toast.error('Erro ao atualizar informações!')
                setLoading(false)

                if (e.response.data && e.response.data.length > 0) {
                    const status = e.response.data[0]

                    if (status.error === 'Token invalid') {
                        toast.error('Sessão expirada!')

                        logout()

                        history.push('/login');
                    }
                }
            })
    }

    return (
        <Container>
            <Link to="/">
                <FiArrowLeft size={18} />&nbsp;
                Voltar
            </Link>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>Configurações</h2>
                    </legend>

                    <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
                        <Loader
                            visible={loading}
                            type="TailSpin"
                            color="#14213D"
                            height={80}
                            width={80}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                </fieldset>

                <button type="submit">Salvar&nbsp;<FiSave size={18} /></button>
            </form>
        </Container>
    );
}

export default SettingsPanel;
