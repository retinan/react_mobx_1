import React, { Component } from "react";
// import { decorate, observable, action } from "mobx";
// import { observer } from "mobx-react";

class Counter extends Component {

    render() {
        const { number, nrIncrease, nrDecrease } = this.props;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={nrIncrease}>+</button>
                <button onClick={nrDecrease}>-</button>
            </div>
        )
    }
}



export default Counter;