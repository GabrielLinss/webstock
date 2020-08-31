import React from 'react';

import './styles.css';

function Modal(props) {
    return (
        <div
            className="container"
            style={{ display: props.show ? 'block' : 'none' }}>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h3>Confirmação</h3>
                    <span className="close-modal-btn" onClick={props.close}>&times;</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-continue" onClick={props.confirm}>Sim</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
