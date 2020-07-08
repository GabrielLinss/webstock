import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import api from '../../services/api';
import { toast } from 'react-toastify';
import Toast from '../Toast';
import { getToken } from '../../services/auth';
import moment from 'moment';

const showToast = (type, message) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast.success(message);
    }
};

function Form() {
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [enterAt, setEnterAt] = useState(moment(new Date()).format('YYYY/MM/DD HH:mm'));
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('/categories', {
            headers: {
              Authorization: `Bearer ${getToken()}`
            }
        }).then(response => {
            setCategories(response.data);
        }).catch(() => {
            history.push('/login');
        });
    }, [history]);

    async function handleSubmit(event) {
        event.preventDefault();

        if (!description || !categoryId || !quantity || !enterAt) {
            showToast('warning', 'Preencha todos os campos!');
            return;
        }

        try {
            const data = {
                description,
                category_id: categoryId,
                quantity,
                enter_at: enterAt
            };

            await api.post('/products', data, {
                headers: {
                  Authorization: `Bearer ${getToken()}`
                }
            });

            setDescription('');
            setCategoryId(0);
            setQuantity(0);

            showToast('success', 'Produto lançado!');
        } catch (error) {
            showToast('error', 'Tente novamente!');
        }
    }

    return (
        <Container>
            <Link to="/">
                <FiArrowLeft size={18} />&nbsp;
                Voltar
            </Link>

            <Toast />

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados do produto</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="description">Descrição</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Digite a descrição"
                            value={description}
                            onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="category">Categoria</label>
                        <select value={categoryId} onChange={e => setCategoryId(e.target.value)} name="category" id="category">
                            <option value="0">Selecione uma categoria</option>
                            { categories.map(category => (
                                <option key={category.id} value={category.id}>{ category.name }</option>
                            )) }
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Digite a quantidade"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="enterAt">Data de entrada</label>
                        <input
                            type="text"
                            id="enterAt"
                            name="enterAt"
                            value={enterAt}
                            onChange={e => setEnterAt(e.target.value)} />
                    </div>
                </fieldset>

                <button type="submit">Lançar&nbsp;<FiSave size={18} /></button>
            </form>
        </Container>
    );
}

export default Form;
