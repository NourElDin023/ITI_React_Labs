import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import TodoDetails from './Pages/TodoDetails.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/todo-details/:id" element={<TodoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
