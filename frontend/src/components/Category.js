import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({name, id, products, cart, setCart}) => {

    // products that belong in this category
    const cat_products = products.filter(pdt => pdt.category_id === id);
    
    const updateCart = e => {
        const newCart = {...cart, [e.target.id]: e.target.valueAsNumber};
        setCart(newCart);
    };

    const display_pdts = cat_products.map(pdt => {
        return (
            <div key={pdt.id} className="card">
                <img className="product" src={pdt.image} alt={pdt.title} />
                <div className="content withlinks">
                    <Link style={{backgroundColor: '#ff3333', color: 'white'}} to={`/products/${pdt.id}`} className="header">{pdt.title}</Link>
                </div>
                <div className="content">
                    <p>SGD${pdt.price}.</p>
                    <p>Quantity Remaining: {pdt.qty}.</p>
                    <p> </p>
                    <div className="ui centered">
                        <input id={pdt.id} name={pdt.id} type="number" step="1" min="0" max={pdt.qty} onChange={updateCart}/>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="ui container">
            <h1>{name}</h1>
            <form className="ui link cards centered">
                {display_pdts}
            </form>
        </div>
    )
}

export default Category;