import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import {inject, observer} from "mobx-react";

const items = [
    {
        name: 'water',
        price: 800,
    },
    {
        name: 'shin ramen',
        price: 1000,
    },
    {
        name: 'potato chips',
        price: 1500,
    },
    {
        name: 'shrimp chips',
        price: 1200,
    }
]

const ShopItemList = ({onPut}) => {
    const itemList = items.map(item => <ShopItem {...item} key={item.name} onPut={onPut}/>)
    return (
        <div>{itemList}</div>
    )
}

export default inject(({market})=>({onPut:market.put}))(observer(ShopItemList));