import React, {useState} from 'react';
import './App.css';
import {Scoreboards} from "./Scoreboards/Scoreboards";
import style from "./Button/Button.module.css";
import {Button} from "./Button/Button";

const App: React.FC = () => {
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
            <div className={style.buttons}>
               <Button className={style.incButton} value={'inc'} onClick={inc} disabled={count === 5}/>
               <Button className={style.resetButton} value={'reset'} onClick={reset} disabled={count === 0}/>
            </div>
         </div>
      </div>
   );
}

export default App
