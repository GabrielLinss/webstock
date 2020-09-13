import React, { useEffect, useCallback, useState } from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux'
import { loadUsersRequest, saveUserRequest } from '../../store/modules/users/actions'
import Loader from 'react-loader-spinner'
import { FaUserPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const roleEnums = { USER: 'Usuário', ADMIN: 'Administrador' }

function UsersTable() {
    const dispatch = useDispatch()

    const history = useHistory()

    const users = useSelector(state => state.users.data)
    const loading = useSelector(state => state.users.loading)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loadUsers = useCallback(() => {
        dispatch(loadUsersRequest(history))
    }, [dispatch, history])

    useEffect(() => {
        loadUsers()
    }, [loadUsers]);

    function handleSubmit(e) {
        e.preventDefault()

        if (!name || !email || !password) {
            toast.warning('Preencha todos os campos!')
            return
        }

        const data = { name, email, password }

        dispatch(saveUserRequest(data, history))

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <button type="submit">
                    Cadastrar novo usuário&nbsp;&nbsp;&nbsp;
                    <FaUserPlus color="white" size={20} />
                </button>
            </form>

            <h1>Usuários</h1>

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
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Tipo/Permissão</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{roleEnums[user.role]}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}

export default UsersTable;
