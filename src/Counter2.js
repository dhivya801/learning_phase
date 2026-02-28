import React from 'react';
import { useState } from 'react';
import './Counter.css';

const Counter2 = () => {
  const [count, setCount] = useState(true);

  function change() {
    setCount(!count);
    console.log(count);
  }

  return (
    <center>
      <div className="counter">
        <h1>{count ? "true" : "false"}</h1>
        <div className={count ? 'box-white' : 'box-dark'}>
        </div>
        <button onClick={change} className="btn_Counter">
          Dark/White
        </button>
      </div>
    </center>
  );
};

export default Counter2;