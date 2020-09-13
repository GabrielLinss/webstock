import React, { useEffect, useCallback } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { loadCostumersRequest } from '../../store/modules/costumers/actions'
import Loader from 'react-loader-spinner'
import formatCpfCnpj from '../../utils/formatCpfCnpj'
import { FaUserPlus } from 'react-icons/fa'

function CostumersTable() {
    const dispatch = useDispatch()

    const history = useHistory()

    const costumers = useSelector(state => state.costumers.data)
    const loading = useSelector(state => state.costumers.loading)

    const loadCostumers = useCallback(() => {
        dispatch(loadCostumersRequest(history))
    }, [dispatch, history])

    useEffect(() => {
        loadCostumers()
    }, [loadCostumers]);

    return (
        <Container>
            <Link to="/novo-cliente">
                Cadastrar novo cliente&nbsp;&nbsp;&nbsp;
                <FaUserPlus color="white" size={20} />
            </Link>

            <h1>Clientes</h1>

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
                        <th>CPF/CNPJ</th>
                        <th>Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {costumers &&
                        costumers.map(costumer => (
                            <tr key={costumer.id}>
                                <td>{costumer.name}</td>
                                <td>{costumer.cpf ? formatCpfCnpj(costumer.cpf) : formatCpfCnpj(costumer.cnpj)}</td>
                                <td>{moment(costumer.created_at).format('DD/MM/YYYY HH:mm')}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}

export default CostumersTable;
