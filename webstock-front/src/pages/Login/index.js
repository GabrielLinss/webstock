import React, { useState } from 'react';
import { Container } from './styles';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { login } from '../../services/auth';
import { Animated } from 'react-animated-css';
import Loader from 'react-loader-spinner'
import Footer from '../../components/Footer'

function Login() {
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
            toast.warning('Preencha todos os campos!')
            return;
        }

        try {
            const data = {
                email,
                password
            };

            setLoading(true)

            const response = await api.post('/login', data);

            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            login(response.data.token, response.data.user.name);

            setEmail('');
            setPassword('');

            setLoading(false)

            history.push('/');
        } catch (error) {
            setLoading(false)
            toast.error('Verifique suas credenciais e tente novamente!')
        }
    }

    return (
        <>
            <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOutLeft"
                animationInDuration={800}
                animationOutDuration={800}
                isVisible={true}>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>
                                <h2>Login</h2>
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
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                        </fieldset>

                        <button type="submit">
                            Entrar&nbsp;
                            <FiLogIn size={18} />
                        </button>
                    </form>
                </Container>
            </Animated>
            <Footer />
        </>
    );
}

export default Login;
