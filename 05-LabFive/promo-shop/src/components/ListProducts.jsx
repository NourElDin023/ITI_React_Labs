import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const getAllProducts = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        if (response.data?.products.length > 0) {
            setProducts(response.data.products.slice(0, 28))
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <>
            <div className="container  mt-5 mb-3 pt-5">
                <div className="card py-4 shadow-lg mt-2">
                    <h2 className='fw-bold text-center text-uppercase text-primary'>All Products</h2>
                    <div className="container d-flex justify-content-center flex-wrap ">
                        {products.map(product => (
                            <div className="card m-3" key={product.id} role='button' onClick={() => navigate(`/product/${product.id}`)} style={{ width: "21rem" }}>
                                <img src={product.thumbnail} className="card-img-top w-50 mx-auto mt-2" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{product.title.split(" ").slice(0, 2).join(" ")}</h5>
                                    <p className="card-text text-center">{product.description.split(" ").slice(0, 8).join(" ")}...</p>
                                    <p className="card-text text-success fs-5 fw-bold text-center fw-medium">${product.price}</p>
                                    <a href="#" className="btn btn-primary w-75 mx-auto d-block">Learn More</a>
                                </div>
                            </div>
                        ))}
                    </div >
                </div>
            </div>
        </>
    )
}

export default ListProducts
