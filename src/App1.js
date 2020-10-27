import React, {Component} from 'react';
import './App.css';
import Counter from "./components/Counter";

class App extends Component {

  state = {
    number:0
  }


  increase = () => {
    let { number } = this.state;
    number++;
    this.setState({
      number: number
    })
  }

  decrease = () => {
    let { number } = this.state;
    number--;
    this.setState({
      number: number
    })
  }


  render() {

    const { number } = this.state;

    return (
        <div className="App">
          <header className="App-header">
            <Counter
                number={number}
                nrIncrease={this.increase}
                nrDecrease={this.decrease}
            />
          </header>
        </div>
    );
  }

}

export default App;
