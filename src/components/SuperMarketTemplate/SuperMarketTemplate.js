import React from "react";
import './SuperMarketTemplate.css';

const SuperMarketTemplate = ({ items, basket}) => {
    return (
        <div className="SuperMarketTemplate">
            <div className="items-wrapper">
                <h2>Items</h2>
                {items}
            </div>
            <div className="basket-wrapper">
                <h2>Basket</h2>
                {basket}
            </div>
        </div>
    );
};

export default SuperMarketTemplate;
