import React, { useState } from 'react';
import Modal from './Modal';

function Todo({ todos, completeTodo, removeTodo }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState();

    const onDelete = (id) => {
        setOpenModal(true);
        setSelectedId(id);
    };

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-rpw complete' : 'todo-row'}
            key={index}
        >
            <div className="picture">
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    <a href={todo.link}>
                        <img className="image" src={todo.picture} alt="" />
                        <div className="Footer-picture">
                            <h3> {todo.text}</h3>
                            <p> {todo.date}</p>
                        </div>{' '}
                    </a>
                </div>
                <div className="onImage">
                    <div
                        className="delete--icon"
                        onClick={() => onDelete(todo.id)}
                    >
                        <i className="material-icons">delete</i>
                    </div>
                    <div class="picture--text">
                        <h1>{todo.text}</h1>
                    </div>
                </div>
            </div>

            {openModal && (
                <Modal
                    removeTodo={removeTodo}
                    closeModal={setOpenModal}
                    id={selectedId}
                />
            )}
        </div>
    ));
}

export default Todo;
