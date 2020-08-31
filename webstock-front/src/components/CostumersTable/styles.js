import styled from 'styled-components';

export const Container = styled.section`
    padding: 20px;

    span {
        margin-right: 10px;
    }

    select {
        margin-bottom: 10px;
        width: 110px;
        height: 30px;
        background: #14213D;
        border-radius: 4px;
        border: 0;
        color: #fff;
        padding: 0 10px;
        font-weight: 700;
    }

    table {
        background: #fff;
        padding: 10px;
        border-radius: 4px;
        width: 100%;
        -webkit-box-shadow: 10px 10px 47px -8px rgba(0,0,0,0.77);
        -moz-box-shadow: 10px 10px 47px -8px rgba(0,0,0,0.77);
        box-shadow: 10px 10px 47px -8px rgba(0,0,0,0.77);

        th {
            padding: 10px;
            background: #E5E5E5;
            text-align: start;
            border-radius: 4px;
        }

        td {
            padding: 10px;
        }
    }

    h1 {
        margin-bottom: 20px;
    }

    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
        color: #fff;
        width: 15%;
        background: #14213D;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        line-height: 45px;
        border-radius: 4px;
        transition: 0.3s;
        border-bottom: 3px solid #14213D;
    }

    a:hover {
        border-bottom: 3px solid #FCA311;
    }

    @media (max-width: 767px) {
        table {
            display: block;
            position: relative;
            width: 100%;

            thead,
            tbody,
            th,
            td,
            tr {
                display: block;
            }

            td,
            th {
                height: 35px;
            }

            thead {
                float: left;
            }

            tbody {
                width: auto;
                position: relative;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;
            }

            tbody tr {
                display: inline-block;
            }
        }

        a {
            width: 100%;
        }
    }
`;
