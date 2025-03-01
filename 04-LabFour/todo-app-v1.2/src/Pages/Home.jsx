import { useState, useEffect } from 'react'
import TodoInput from '../components/TodoInput.jsx'
import TodoList from '../components/TodoList.jsx';
import FiltrationTabs from "../components/FiltrationTabs";

const Home = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all");

    const addNewTodo = (todo) => {
        const allTodos = [...todos, todo];
        setTodos(allTodos);
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    useEffect(() => {
        if (selectedFilter === "all") {
            setFilteredTodos(todos);
        } else if (selectedFilter === "inProgress") {
            const allTodos = todos.filter((todo) => todo.completed === false);
            setFilteredTodos(allTodos);
        } else if (selectedFilter === "completed") {
            const allTodos = todos.filter((todo) => todo.completed === true);
            setFilteredTodos(allTodos);
        }

        localStorage.setItem("todos", JSON.stringify(todos));
    }, [selectedFilter, todos]);

    return (
        <>
            <div className="container pt-4 d-flex flex-column align-items-center" >
                <h2 className='text-uppercase fw-bold text-primary'>ToDo App</h2>
                <TodoInput addNewTodo={addNewTodo} />
                {todos.length > 0 ? (
                    <>
                        <div className="dropdown-divider my-4" />
                        <FiltrationTabs
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                        <TodoList
                            todos={filteredTodos}
                            onTodoDelete={(todoId) => deleteTodo(todoId)}
                        />
                    </>
                ) : null}
            </div>
        </>
    )
}

export default Home
