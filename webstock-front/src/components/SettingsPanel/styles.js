import styled from 'styled-components';

export const Container = styled.section`
    background: #fff;
    margin-top: 10px;
    border-radius: 4px;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    -webkit-box-shadow: 10px 10px 47px -8px rgba(0,0,0,0.77);
    -moz-box-shadow: 10px 10px 47px -8px rgba(0,0,0,0.77);
    box-shadow: 10px 10px 47px -8px rgba(0,0,0,0.77);

    a {
        background: #14213D;
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        display: flex;
        width: 80px;
        height: 45px;
        align-items: center;
        padding: 5px;
        border-radius: 4px;
        margin-bottom: 24px;
        transition: 0.3s;
        border-bottom: 3px solid #14213D;
    }

    a:hover {
        border-bottom: 3px solid #FCA311;
    }

    form {
        margin: 10px auto;
        max-width: 730px;
        display: flex;
        flex-direction: column;

        fieldset {
            margin-top: 10px;
            min-inline-size: auto;
            border: 0;
        }

        legend {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;

            h2 {
                font-size: 24px;
            }
        }

        .field {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;

            input[type=text],
            input[type=number],
            input[type=email],
            input[type=password] {
                flex: 1;
                background: #E5E5E5;
                border-radius: 4px;
                border: 0;
                padding: 14px 24px;
                font-size: 16px;
                color: #6C6C80;
            }

            select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                flex: 1;
                background: #E5E5E5;
                border-radius: 4px;
                border: 0;
                padding: 14px 24px;
                font-size: 16px;
                color: #6C6C80;
            }

            input::placeholder {
                color: #6C6C80;
            }

            label {
                font-size: 14px;
                margin-bottom: 8px;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 45px;
            background: #14213D;
            border-radius: 4px;
            color: #FFF;
            font-weight: 700;
            font-size: 16px;
            border: 0;
            margin-top: 20px;
            cursor: pointer;
            transition: 0.3s;
            border-bottom: 3px solid #14213D;
        }

        button:hover {
            border-bottom: 3px solid #FCA311;
        }
    }

    @media (max-width: 667px) {
        max-width: 350px;
    }
`;
