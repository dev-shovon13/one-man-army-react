import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, origin, originFlag, status, role } = props.product
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 card-color">
                <img src={img} className="product-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="text-danger"><span className="text-secondary fw-bold">Role: </span>{role}</p>
                    <p><span className="text-secondary fw-bold">Price: <span className="text-warning fw-bold">$ </span> </span>{price}</p>
                    <p className="text-success"><span className="text-secondary fw-bold">Status: </span>{status}</p>
                    <p><span className="text-secondary fw-bold">Origin: </span>{origin} <img src={originFlag} alt="" className="origin-flag" /></p>
                </div>
                <div className="p-3 text-center">
                    <button className="btn btn-outline-success" onClick={() => props.orderProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Order Item</button>
                </div>
            </div>
        </div>
    );
};

export default Product;