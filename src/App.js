import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import SuperMarket from "./components/SuperMarket";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <hr/>
                <SuperMarket/>
            </header>
        </div>
    );
}

export default App;
