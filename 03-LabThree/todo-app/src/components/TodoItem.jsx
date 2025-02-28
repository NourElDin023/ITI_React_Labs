import React from 'react';

const TodoItem = (props) => {
    const { todo } = props;

    return (
        <>
            <div className="rounded-2 my-2 p-3 bg-body-tertiary d-flex justify-content-between align-items-center w-75 shadow">
                <h5>{todo.title}</h5>
                <i className="fa-solid fa-trash fs-4 text-danger btn"></i>
            </div>
        </>
    );
};

export default TodoItem;
