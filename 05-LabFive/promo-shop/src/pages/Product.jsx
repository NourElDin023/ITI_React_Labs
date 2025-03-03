import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState("");

    const getProductById = async (id) => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
    };

    useEffect(() => {
        if (params.productId) {
            getProductById(params.productId);
        }
    }, [params]);

    if (!product) {
        return (
            <div className="text-center mt-5 pt-5">
                <div className="spinner-border text-primary mt-5" role="status"></div>
                <p>Loading product details...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-3 pt-5">
            <div className="card p-4 shadow-lg mt-2">
                <div className="row g-4">
                    <div className="col-md-5 text-center">
                        <img src={product.thumbnail} className="img-fluid rounded shadow" alt={product.title} />
                    </div>
                    <div className="col-md-7">
                        <h2 className="fw-bold">{product.title}</h2>
                        <p className="text-muted">{product.category}</p>
                        <p>{product.description}</p>
                        <h4 className="text-success fw-bold">${product.price}</h4>
                        <span className={`badge ${product.stock > 10 ? "bg-success" : "bg-danger"}`}>
                            {product.stock > 10 ? "In Stock" : "Low Stock"}
                        </span>
                        <div className="mt-3">
                            <button className="btn btn-primary w-100">Add to Cart</button>
                        </div>
                        <div className="mt-4">
                            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                        </div>
                        <p className="text-muted">
                            <small>Last updated:{" "}{product.meta.updatedAt.split("T")[0]}</small>
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <h4>Customer Reviews</h4>
                    {product.reviews.map((review, index) => (
                        <div key={index} className="border-bottom pb-2 mb-2">
                            <p className="fw-bold">{review.reviewerName}</p>
                            <p className="text-warning">⭐ {review.rating}/5</p>
                            <p>{review.comment}</p>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default Product;
