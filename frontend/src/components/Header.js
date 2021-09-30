import React from 'react';
import dbslogo from '../img/dbsbank.png';

const Header = () => {

    return (
        <div className="ui menu">
            <div className="item">
                <img className="ui mini image" src={dbslogo} alt="home"/>
            </div>
            <div className="right menu">
                <div className="item">
                    Login
                </div>
            </div>
        </div>
    )
};

export default Header;