import React from 'react';
import { Link } from 'react-router-dom';
import dbslogo from '../img/dbsbank.png';

const Header = () => {

    return (
        <div className="ui menu">
            <div className="item">
                <Link to="/">
                    <img className="ui mini image" src={dbslogo} alt="home"/>
                </Link>
            </div>
            <div className="right menu">
                <div className="item">
                    <Link to="/checkout">Checkout</Link>
                </div>
            </div>
        </div>
    )
};

export default Header;