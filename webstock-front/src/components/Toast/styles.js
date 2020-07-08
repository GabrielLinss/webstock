import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Container = styled(ToastContainer)`
.Toastify__toast--success {
    background: #14213D;
    border-radius: 4px;
}

.Toastify__toast--error {
    background: #ff6b6b;
    border-radius: 4px;
}

.Toastify__toast--warning {
    background: #FCA311;
    border-radius: 4px;
}
`;
