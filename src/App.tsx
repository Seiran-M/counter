import React, {useState} from 'react';
import './App.css';
import {Scoreboards} from "./Scoreboards/Scoreboards";
import {Buttons} from "./Buttons/Buttons";

function App() {
    let [count, setCount] = useState(0);

    let inc = () => {
        if (count < 5) {
            setCount(count + 1)
            return (
                <div className="scoreboard">{count}</div>
            )
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div className='wrapper'>
                <Scoreboards count={count}/>
                <Buttons inc={inc} reset={reset} count={count}/>
            </div>
        </div>
    );
}

export default App
