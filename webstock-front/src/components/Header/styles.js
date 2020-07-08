import styled from 'styled-components';

export const Container = styled.header`
    height: 50px;
    background: #14213D;
    padding: 0 24px;
    display: flex;
    align-items: center;
    width: 100%;

    img {
        height: 45px;
    }

    span {
        font-size: 14px;
        font-weight: 700;
        margin-left: 24px;
        color: #fff;
    }

    a {
        margin-left: auto;
        color: #fff;
        width: 200px;
        background: transparent;
        font-weight: 700;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        line-height: 45px;
        transition: 0.2s;
    }

    a:hover {
        border-bottom: 3px solid #FCA311;
    }

    button {
        cursor: pointer;
        height: 45px;
        width: 45px;
        background: transparent;
        margin-left: 24px;
        border: 0;
        transition: 0.2s;
    }

    button:hover {
        border-bottom: 3px solid #FCA311;
    }

    @media (max-width: 767px) {
        a {
            display: none;
        }

        button {
            margin-left: auto;
        }
    }
`;
