import styled from 'styled-components';

export const Container = styled.header`
    height: 50px;
    background: #14213D;
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .banner, .buttons {
        display: flex;
        align-items: center;
    }

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
        color: #fff;
        width: 100px;
        background: transparent;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        line-height: 45px;
        transition: 0.3s;
        border-bottom: 3px solid #14213D;
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
        border: none;
        transition: 0.3s;
        border-bottom: 3px solid #14213D;
    }

    button:hover {
        border-bottom: 3px solid #FCA311;
    }

    @media (max-width: 767px) {
        a {
            display: none;
        }
    }
`;
