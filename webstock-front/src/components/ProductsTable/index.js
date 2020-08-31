import React, { useState, useEffect, useCallback } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { loadProductsRequest } from '../../store/modules/products/actions'
import Loader from 'react-loader-spinner'
import { FaPlus } from 'react-icons/fa'

function ProductsTable() {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products.data)
    const loading = useSelector(state => state.products.loading)

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    useEffect(() => {
        api.get('/categories')
            .then(response => {
                setCategories(response.data);
            }).catch(error => console.log(error));
    }, []);

    const loadProducts = useCallback((category) => {
        dispatch(loadProductsRequest(category))
    }, [dispatch])

    useEffect(() => {
        loadProducts(selectedCategory)
    }, [loadProducts, selectedCategory]);

    return (
        <Container>
            <Link to="/new-product">
                Lançar novo produto&nbsp;&nbsp;&nbsp;
                <FaPlus color="white" size={18} />
            </Link>

            <h1>Produtos</h1>

            <span>Filtrar por categoria</span>

            <select onChange={e => setSelectedCategory(e.target.value)}>
                <option value="0">Todas</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

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
                        <th>Cód</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Entrada</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.description}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{moment(product.enter_at).format('DD/MM/YYYY HH:mm')}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}

export default ProductsTable;
