import React, { useState } from 'react';
import { useEffect } from 'react';
import api_call from '../api/api_call';
import './Category.css';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            const pdt = await api_call.get(`/products/${props.match.params.id}`);
            setProduct(pdt.data[0]);
            
        }
        getProduct();
        console.log(product);
    }, [product.id]);

    if (!product.title) { return <div>Loading...</div>}

    return (
        <div className="ui segment">
            <h2 className="ui center aligned container">{product.title}</h2>
            <img className="ui medium rounded centered image" src={product.image} alt={product.title}/>
            <h2 className="ui center aligned container">Price: SGD${product.price}</h2>
            <h3 className="ui center aligned container">Quantity Remaining: {product.qty}</h3>
            <h4>Description</h4>
            <p>{product.description}</p>
            <Link to="/" className="ui center aligned container" style={{margin:'20px'}}>
                <button class="ui negative button">Return to Store</button>
            </Link>
        </div>
    )
}

export default Product;