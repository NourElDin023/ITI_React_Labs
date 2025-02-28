import { useState } from 'react'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    const allTodos = [...todos, todo];
    setTodos(allTodos);
  };

  return (
    <>
      <div className="container pt-4 d-flex flex-column align-items-center" >
        <h2 className='text-uppercase fw-bold text-primary'>ToDo App</h2>
        <TodoInput addNewTodo={addNewTodo} />
        {todos.length > 0 ? (
          <>
            <div className="dropdown-divider my-4" />
            <TodoList todos={todos} />
          </>
        ) : null}
      </div>
    </>
  )
}

export default App
