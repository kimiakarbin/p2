import React, { useState } from 'react';

function Todo({ todos, completeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });
    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-rpw complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                <div className="picture--border">
                    <img className="img--image" src={todo.picture} alt="" />
                    <div className="Footer--picture">
                        <h3> {todo.text}</h3>
                        <p> {todo.date}</p>
                        <a href="www.html.com">
                            <p>www.html.com</p>
                        </a>
                    </div>
                    <div className="middle">
                        <div className="delete--icon">
                            <i className="material-icons">delete</i>
                        </div>
                        <div class="picture--text">first picture</div>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Todo;
