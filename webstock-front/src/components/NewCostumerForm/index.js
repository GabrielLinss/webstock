import React, { useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { saveCostumerRequest } from '../../store/modules/costumers/actions'
import Loader from 'react-loader-spinner'
import moment from 'moment'

function NewCostumerForm() {
    const dispatch = useDispatch()

    const loading = useSelector(state => state.costumers.loading)

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const createdAtDate = moment(new Date()).format('YYYY-MM-DD')
    const createdAtHour = moment(new Date()).format('HH:mm')
    const [personType, setPersonType] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        if (!name || (!cpf && !cnpj)) {
            toast.warning('Preencha todos os campos!')
            return;
        }

        const data = {
            name,
            created_at: `${createdAtDate} ${createdAtHour}`
        };

        if (cpf) {
            if (cpf.length !== 11) {
                toast.warning('CPF inválido!')
                return
            }
            data.cpf = cpf
        }

        if (cnpj) {
            if (cnpj.length !== 14) {
                toast.warning('CNPJ inválido!')
                return
            }
            data.cnpj = cnpj
        }

        dispatch(saveCostumerRequest(data))

        setName('');
        setCpf('');
        setCnpj('');
    }

    function handleChangePersonType(e) {
        setCpf('')
        setCnpj('')
        setPersonType(e.target.value)
    }

    return (
        <Container>
            <Link to="/costumers">
                <FiArrowLeft size={18} />&nbsp;
                Voltar
            </Link>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados do cliente</h2>
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
                        <label htmlFor="person-type">Tipo de pessoa</label>
                        <select value={personType} onChange={handleChangePersonType} name="person-type" id="person-type">
                            <option value="0">Selecione o tipo</option>
                            <option value="physical">Física</option>
                            <option value="legal">Jurídica</option>
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite o nome"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    {personType === 'physical' && <div className="field">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="Digite o cpf"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)} />
                    </div>}
                    {personType === 'legal' && <div className="field">
                        <label htmlFor="cnpj">CNPJ</label>
                        <input
                            type="text"
                            id="cnpj"
                            name="cnpj"
                            placeholder="Digite o cnpj"
                            value={cnpj}
                            onChange={e => setCnpj(e.target.value)} />
                    </div>}
                </fieldset>

                <button type="submit">Cadastrar&nbsp;<FiSave size={18} /></button>
            </form>
        </Container>
    );
}

export default NewCostumerForm;
