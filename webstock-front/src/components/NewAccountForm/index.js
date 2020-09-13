import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import api from '../../services/api';
import { logout } from '../../services/auth';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { saveAccountRequest } from '../../store/modules/accounts/actions'
import Loader from 'react-loader-spinner'

function NewAccountForm() {
    const dispatch = useDispatch()

    const history = useHistory()

    const loading = useSelector(state => state.accounts.loading)

    const [costumerId, setCostumerId] = useState(0);
    const [balance, setBalance] = useState(0);
    const [debt, setDebt] = useState(0);
    const [createdAt, setCreatedAt] = useState(moment(new Date()).format('YYYY-MM-DD HH:mm'));
    const [costumers, setCostumers] = useState([]);

    useEffect(() => {
        api.get('/costumers')
            .then(response => {
                setCostumers(response.data);
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

        if (!costumerId) {
            toast.warning('Selecione o cliente!')
            return;
        }

        const data = {
            costumer_id: parseInt(costumerId),
            balance: parseFloat(balance),
            debt: parseFloat(debt),
            created_at: createdAt
        };

        dispatch(saveAccountRequest(data, history))

        setCostumerId(0);
        setBalance(0);
        setDebt(0);
    }

    return (
        <Container>
            <Link to="/contas">
                <FiArrowLeft size={18} />&nbsp;
                Voltar
            </Link>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados da conta</h2>
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
                        <label htmlFor="costumer">Cliente</label>
                        <select value={costumerId} onChange={e => setCostumerId(e.target.value)} name="costumer" id="costumer">
                            <option value={0}>Selecione um cliente</option>
                            {costumers.map(costumer => (
                                <option key={costumer.id} value={costumer.id}>{costumer.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="balance">Saldo <span>(se houver)</span></label>
                        <input
                            type="number"
                            id="balance"
                            name="balance"
                            placeholder="Digite o saldo"
                            value={balance}
                            onChange={e => setBalance(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="debt">Dívida <span>(se houver)</span></label>
                        <input
                            type="number"
                            id="debt"
                            name="debt"
                            value={debt}
                            onChange={e => setDebt(e.target.value)} />
                    </div>
                </fieldset>

                <button type="submit">Salvar&nbsp;<FiSave size={18} /></button>
            </form>
        </Container>
    );
}

export default NewAccountForm;
