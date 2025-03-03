import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ByCategory = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [productsByCategory, setProductsByCategory] = useState([])
    const getAllProductsByCategory = async (category) => {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
        if (response.data?.products.length > 0) {
            setProductsByCategory(response.data.products)
        }
    }
    useEffect(() => {
        if (params.categoryId) {
            getAllProductsByCategory(params.categoryId)
        }
    }, [params])
    return (
        <>
            <div className="container mt-5 mb-3 pt-5">
                <div className="card p-4 shadow-lg mt-2">
                    <h2 className=' fw-bold text-center text-uppercase text-primary'>{params.categoryId}</h2>
                    <div className="container d-flex justify-content-center flex-wrap mt-4 ">
                        {productsByCategory.map(product => (
                            <div class="card mb-3 p-2" style={{ maxWidth: "1000px", minHeight: "300px", minWidth: "300px" }} key={product.id} onClick={() => navigate(`/product/${product.id}`)} role='button'>
                                <div class="row g-0 h-100">
                                    <div class="col-md-4 text-center">
                                        <img src={product.thumbnail} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8 h-md-100">
                                        <div class="card-body d-flex flex-column align-items-center justify-content-between h-100 pt-5">
                                            <h5 class="card-title text-center fw-bold">{product.title}</h5>
                                            <p class="card-text">{product.description}</p>
                                            <div className="row w-100 align-items-center">
                                                <h4 className="text-success fw-bold text-center fw-medium col-4">${product.price}</h4>
                                                <a href="#" className="btn btn-primary mx-auto col-8">Learn More</a>
                                            </div>
                                            <p class="card-text align-self-end"><small class="text-body-secondary">{product.meta.updatedAt.split("T")[0]}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div >
                </div>
            </div>
        </>
    )
}

export default ByCategory
