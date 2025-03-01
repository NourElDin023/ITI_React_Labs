import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TodoDetails = () => {
    const [todo, setTodo] = useState();
    const params = useParams();
    const location = useLocation();

    console.log(location.state);

    useEffect(() => {
        if (params.id) {
            const todos = JSON.parse(localStorage.getItem("todos"));
            const selectedTodo = todos.find((todo) => todo.id === +params.id);
            setTodo(selectedTodo);
        }
    }, [params]);

    return (
        <div>
            {todo ? (
                <div className="container card border mt-4 p-4">
                    <h2 className="fw-bold   text-center">{todo.title}</h2>
                    <hr />
                    <p className="fs-5 px-4 card-body py-3">{todo.description}</p>
                </div>
            ) : null}
        </div>
    );
};

export default TodoDetails;
