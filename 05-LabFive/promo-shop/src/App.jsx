import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ByCategory from "./pages/ByCategory";
import Layout from "./Layout";
import Product from "./pages/Product";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/products/:categoryId" element={<ByCategory />} />
            <Route path="/product/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
