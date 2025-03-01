import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoItem = ({ todo, onTodoDelete }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="rounded-2 my-2 p-3 bg-body-tertiary d-flex justify-content-between align-items-center w-75 shadow">
                <h5 role='button' onClick={() => navigate(`/todo-details/${todo.id}`, { state: todo, })} >{todo.title}</h5>
                <i className="fa-solid fa-trash fs-4 text-danger btn" onClick={() => onTodoDelete(todo.id)} ></i>
            </div>
        </>
    );
};

export default TodoItem;
