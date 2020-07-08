import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import { getToken } from '../../services/auth';

function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const history = useHistory();

    useEffect(() => {
        api.get('/categories', {
            headers: {
              Authorization: `Bearer ${getToken()}`
            }
        }).then(response => {
            setCategories(response.data);
        });
    },[]);

    useEffect(() => {
        api.get(`/products?category_id=${selectedCategory}`, {
            headers: {
              Authorization: `Bearer ${getToken()}`
            }
        }).then(response => {
            setProducts(response.data);
        }).catch(() => {
            history.push('/login');
        });
    },[selectedCategory, history]);

    return (
        <Container>
            <Link to="/new">Lançar novo produto</Link>

            <h1>Produtos</h1>

            <span>Filtrar por categoria</span>

            <select onChange={e => setSelectedCategory(e.target.value)}>
                <option value="0">Todas</option>
                { categories.map(category => (
                    <option key={category.id} value={category.id}>{ category.name }</option>
                )) }
            </select>

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
                    { products.map(product => (
                        <tr key={product.id}>
                            <td>{ product.id }</td>
                            <td>{ product.description }</td>
                            <td>{ product.name }</td>
                            <td>{ product.quantity }</td>
                            <td>{ moment(product.enter_at).format('DD/MM/YYYY HH:mm') }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </Container>
    );
}

export default ProductsTable;
