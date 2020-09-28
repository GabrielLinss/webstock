import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Loader from 'react-loader-spinner'
import { FaPlus, FaSearch } from 'react-icons/fa'
import api from '../../services/api'
import { logout } from '../../services/auth'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

function AccountsTable() {
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const history = useHistory()

    useEffect(() => {
        setLoading(true)
        api.get('/accounts')
            .then(response => {
                setAccounts(response.data);
                setLoading(false)
            }).catch(e => {
                toast.error('Erro ao carregar contas!')
                setLoading(false)

                if (e.response.data && e.response.data.length > 0) {
                    const status = e.response.data[0]

                    if (status.error === 'Token invalid') {
                        toast.error('Sessão expirada!')

                        logout()

                        history.push('/login');
                    }
                }
            });
    }, [history]);

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)

            const response = await api.get(`/accounts?name=${search}`)

            setLoading(false)

            setAccounts(response.data)
        } catch (error) {
            setLoading(false)
            toast.error('Erro ao buscar conta!')

            if (error.response.data && error.response.data.length > 0) {
                const status = error.response.data[0]

                if (status.error === 'Token invalid') {
                    toast.error('Sessão expirada!')

                    logout()

                    history.push('/login');
                }
            }
        }
    }

    return (
        <Container>
            <div className="menu">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome do cliente"
                        value={search}
                        onChange={e => setSearch(e.target.value)} />
                    <br />
                    <br />
                    <button type="submit">
                        Buscar&nbsp;&nbsp;&nbsp;
                        <FaSearch color="white" size={20} />
                    </button>
                </form>

                <button type="button" onClick={() => history.push('nova-conta')}>
                    Nova conta&nbsp;&nbsp;&nbsp;
                    <FaPlus color="white" size={20} />
                </button>
            </div>

            <h1>Contas</h1>

            <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
                <Loader
                    visible={loading}
                    type="TailSpin"
                    color="#14213D"
                    height={80}
                    width={80}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Saldo</th>
                        <th>Dívida</th>
                        <th>Criada em</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts &&
                        accounts.map(account => (
                            <tr key={account.id}>
                                <td>{account.name}</td>
                                <td>R$ {new Intl.NumberFormat('pt-BR').format(account.balance)}</td>
                                <td>R$ {new Intl.NumberFormat('pt-BR').format(account.debt)}</td>
                                <td>{moment(account.created_at).format('DD/MM/YYYY HH:mm')}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}

export default AccountsTable;
