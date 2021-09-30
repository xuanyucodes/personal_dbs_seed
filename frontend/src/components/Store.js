import React, { useEffect } from 'react';
import Header from './Header';
import productlist from '../jsondata/products.json';

const Store = () => {

    useEffect(() => {
        console.log(productlist);
    }, [])

    return (
        <div>Storefront</div>
    )
};

export default Store;