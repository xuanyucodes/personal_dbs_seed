import React, { useEffect, useState } from 'react';
import api_call from '../api/api_call';
import Category from './Category';

const Store = (props) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    // const [cart, setCart] = useState({}); // to track shopping cart purchases of format {pdt_id: qty}

    useEffect(() => {
        const getProducts = async () => {
            const pdts = await api_call.get('/products');
            setProducts(pdts.data);
        }
        getProducts();
        console.log('products', products);

        const getCategories = async () => {
            const cats = await api_call.get('/categories');
            setCategories(cats.data);
        }
        getCategories();
        console.log('cats', categories);
    },[products.length, categories.length]) // have to do this or will have infinite calls

    const renderList = categories.map(category => {
            return (
                <div key={category.id} className="ui container" style={{marginBottom: '20px'}}>
                    <Category name={category.name} id={category.id} products={products} cart={props.cart} setCart={props.setCart}/>
                </div>
            )
    });
    
    if (products.length === 0) { return <div>Loading...</div>}
    return (
        <div>
            {renderList}
        </div>
    )
};

export default Store;