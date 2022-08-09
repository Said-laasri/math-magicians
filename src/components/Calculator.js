import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const showResult = (e) => {
    setState({
      total: e.target.textContent,
    });
  };

  const { total, next, operation } = state;
  return (
    <>
      <div className="math">Lets do some math!!!</div>
      <div className="calculator">
        <div className="answer" onChange={showResult}>
          {total}
          {operation}
          {next}
        </div>
        <div className="section1">
          <button onClick={clickHandler} type="button" className="number">
            AC
          </button>
          <button onClick={clickHandler} type="button" className="number">
            +/-
          </button>
          <button onClick={clickHandler} type="button" className="number">
            %
          </button>
          <button onClick={clickHandler} type="button" className="side-symbols">
            ÷
          </button>
        </div>
        <div className="section1">
          <button onClick={clickHandler} type="button" className="number">
            7
          </button>
          <button onClick={clickHandler} type="button" className="number">
            8
          </button>
          <button onClick={clickHandler} type="button" className="number">
            9
          </button>
          <button onClick={clickHandler} type="button" className="side-symbols">
            x
          </button>
        </div>
        <div className="section1">
          <button onClick={clickHandler} type="button" className="number">
            4
          </button>
          <button onClick={clickHandler} type="button" className="number">
            5
          </button>
          <button onClick={clickHandler} type="button" className="number">
            6
          </button>
          <button onClick={clickHandler} type="button" className="side-symbols">
            -
          </button>
        </div>
        <div className="section1">
          <button onClick={clickHandler} type="button" className="number">
            1
          </button>
          <button onClick={clickHandler} type="button" className="number">
            2
          </button>
          <button onClick={clickHandler} type="button" className="number">
            3
          </button>
          <button onClick={clickHandler} type="button" className="side-symbols">
            +
          </button>
        </div>
        <div className="section1">
          <button onClick={clickHandler} type="button" className="number0">
            0
          </button>
          <button onClick={clickHandler} type="button" className="number">
            .
          </button>
          <button onClick={clickHandler} type="button" className="side-symbols">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
