import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import api from '../../services/api';
import { logout } from '../../services/auth';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { saveProductRequest } from '../../store/modules/products/actions'
import Loader from 'react-loader-spinner'

function NewProductForm() {
    const dispatch = useDispatch()

    const history = useHistory()

    const loading = useSelector(state => state.products.loading)

    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [enterAtDate, setEnterAtDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [enterAtHour, setEnterAtHour] = useState(moment(new Date()).format('HH:mm'));
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get('/categories')
            .then(response => {
                setCategories(response.data);
            }).catch(error => {
                if (error.response.data && error.response.data.length > 0) {
                    const status = error.response.data[0]

                    if (status.error === 'Token invalid') {
                        toast.error('Sessão expirada!')

                        logout()

                        history.push('/login');
                    }
                }
            });
    }, [history]);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description || !categoryId || !enterAtDate || !enterAtHour) {
            toast.warning('Preencha todos os campos!')
            return;
        }

        const data = {
            description,
            category_id: parseInt(categoryId),
            quantity: parseInt(quantity),
            enter_at: `${enterAtDate} ${enterAtHour}`
        };

        dispatch(saveProductRequest(data, history))

        setDescription('');
        setCategoryId(0);
        setQuantity(0);
    }

    return (
        <Container>
            <Link to="/produtos">
                <FiArrowLeft size={18} />&nbsp;
                Voltar
            </Link>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados do produto</h2>
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
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
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
                        <label htmlFor="enterAtDate">Data de entrada</label>
                        <input
                            type="date"
                            id="enterAtDate"
                            name="enterAtDate"
                            defaultValue={enterAtDate}
                            onChange={e => setEnterAtDate(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="enterAtHour">Hora de entrada</label>
                        <input
                            type="time"
                            id="enterAtHour"
                            name="enterAtHour"
                            defaultValue={enterAtHour}
                            onChange={e => setEnterAtHour(e.target.value)} />
                    </div>
                </fieldset>

                <button type="submit">Lançar&nbsp;<FiSave size={18} /></button>
            </form>
        </Container>
    );
}

export default NewProductForm;
