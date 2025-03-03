import axios from 'axios'
import logo from '/promo-shop-logo-1.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const MainNav = () => {
    const [categories, setCategories] = useState([])
    const [fullCategories, setFullCategories] = useState([])
    const navigate = useNavigate()
    const getAllProductsCategories = async () => {
        const response = await axios.get('https://dummyjson.com/products/categories')
        if (response.data?.length > 0) {
            setCategories(response.data.slice(0, 3))
            setFullCategories(response.data.slice(1, 10))
        }
    }
    useEffect(() => {
        getAllProductsCategories()
    }, [])

    return (
        <nav className="fixed-top px-lg-5 px-md-1 navbar navbar-expand-md bg-primary" data-bs-theme="dark">
            <div className="mx-lg-5 container-fluid">
                <div className="navbar-brand">
                    <a className="navbar-brand fs-3 fw-bold d-flex align-items-center text-uppercase" role='button' onClick={() => navigate('/')}>
                        <img src={logo} alt="Logo" height={50} className="d-inline-block align-text-top" />
                        Promo Shop
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-4 fw-medium" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        {categories.map(category => (<a className="nav-link d-none d-md-block" role='button' key={category.slug} onClick={() => navigate(`/products/${category.slug}`)}>{category.name}</a>))}
                        {fullCategories.map(fullCategories => (<a className="nav-link d-md-none" role='button' key={fullCategories.slug} onClick={() => navigate(`/products/${fullCategories.slug}`)}>{fullCategories.name}</a>))}
                        <a className="nav-link d-md-none" href="#">Cart</a>
                    </div>
                </div><a href="#" className=' fs-3 d-none d-md-block mx-2'><i className="fa-solid fa-cart-shopping text-white"></i></a>
            </div>
        </nav>
    )
}

export default MainNav