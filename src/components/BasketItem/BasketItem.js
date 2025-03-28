import React from "react";
import './BasketItem.css'
import {observer} from "mobx-react";

const BasketItem = ({name, price, count, onTake}) => {
    return (
        <div className="BasketItem">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="count">{count}</div>
            <div className="return" onClick={()=> onTake(name)}>remove</div>
        </div>
    )
}

export default observer(BasketItem);