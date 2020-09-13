import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Loader from 'react-loader-spinner'
import { FaPlus } from 'react-icons/fa'
import api from '../../services/api'
import { logout } from '../../services/auth'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

function CategoriesTable() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')

    const history = useHistory()

    useEffect(() => {
        setLoading(true)
        api.get('/categories')
            .then(response => {
                setCategories(response.data);
                setLoading(false)
            }).catch(e => {
                toast.error('Erro ao carregar categorias!')
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

        if (!name) {
            toast.warning('Preencha o campo nome!')
            return
        }

        try {
            setLoading(true)

            const response = await api.post('/categories', { name })

            setLoading(false)

            setCategories([response.data, ...categories])

            setName('')

            toast.success('Categoria cadastrada com sucesso!')
        } catch (error) {
            setLoading(false)
            toast.error('Erro ao cadastrar categoria!')

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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome da categoria"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <br />
                <br />
                <button type="submit">
                    Cadastrar nova categoria&nbsp;&nbsp;&nbsp;
                <FaPlus color="white" size={20} />
                </button>
            </form>

            <h1>Categorias</h1>

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
                    </tr>
                </thead>
                <tbody>
                    {categories &&
                        categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}

export default CategoriesTable;
