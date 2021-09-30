import React from 'react';
import '../asests/ProjectStyle.css';

function Modal({ closeModal, removeTodo, id }) {
    const onCancle = () => {
        removeTodo(id);
        closeModal(false);
    };

    return (
        <div className="background-color">
            <div className="modal-container">
                <div className="title">
                    <h1>Are you sure you want to delete this picture? </h1>
                </div>

                <div className="footer-Modal">
                    <button className="yesBtn" onClick={onCancle}>
                        Yes
                    </button>
                    <button className="noBtn" onClick={() => closeModal(false)}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
