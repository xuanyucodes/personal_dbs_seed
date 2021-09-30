import React, { useState } from 'react';
import api_call from '../api/api_call';

const Checkout = (props) => {

    let totalPrice = 0;

    const purchases = props.cart;

    const updateCart = e => {
        const newCart = {...purchases, [e.target.id]: {
            qtypurchased: e.target.valueAsNumber,
            desc: e.target.name,
            img: e.target.attributes.getNamedItem('img').value,
            price: parseInt(e.target.attributes.getNamedItem('price').value)
        }};
        props.setCart(newCart);
    };

    const renderedTableRows = Object.keys(purchases).map(productid => {
        const item = purchases[productid];
        if (item.qtypurchased > 0) {
            totalPrice += item.qtypurchased * item.price;
            return (
                <tr key={productid}>
                    <td>
                        <h4 className="ui image header">
                            <img className="ui big image" src={item.img} alt={item.id}/>
                            <div className="content">
                                {item.desc}
                                <div className="sub header"></div>   
                            </div>
                        </h4>
                    </td>
                    <td>{item.price}</td>
                    <td><input id={productid} name={item.desc} img={item.img} price={item.price} value={purchases[productid].qtypurchased} type="number" step="1" min="0" max={purchases[productid].qty} onChange={updateCart}/>
                    </td>
                    <td>{item.price * item.qtypurchased}</td>
                </tr>
            )
        } 
    })

    const submitForm = (event) => {
        event.preventDefault();
        Object.keys(purchases).map(async productid => {
            const response = await api_call.patch(`/products/${productid}`, {
                qtypurchased: purchases[productid].qtypurchased
            })
            console.log(`Product of id ${productid} (${response.data.title}) has ${response.data.qty} units remainder.`)
        })
    }

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr><th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr></thead>
                <tbody>
                    {renderedTableRows}
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{fontWeight:'bold'}}>Total</td>
                        <td style={{fontWeight:'bold'}}>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>
            <form className="ui centered grid" style={{margin: '20px'}} onSubmit={submitForm}>
                <button type="submit" className="ui red button">Order Now</button>
            </form>
        </div>
    )
}

export default Checkout;