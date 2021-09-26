import React from 'react';
import Giveinformation from './Giveinformation';
import './ProjectStyle.css';
import ListItem1 from './ListItem1';
import ListItem2 from './ListItem2';
import ListItem3 from './ListItem3';
import ListItem4 from './ListItem4';
import { useState } from 'react/cjs/react.development';
import Todo from './Todo';

function List(props) {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div>
            <Giveinformation onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} />
            {/* <div className="all-image1">
                <ListItem1 />
                <ListItem2 />
            </div>
            <div className="all-image2">
                <ListItem3 />
                <ListItem4 />
            </div> */}
        </div>
    );
}

export default List;
