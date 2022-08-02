/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="answer">
          <span>0</span>
        </div>
        <div className="section1">
          <button type="button" className="number">AC</button>
          <button type="button" className="number">+/-</button>
          <button type="button" className="number">%</button>
          <button type="button" className="side-symbols">/</button>
        </div>
        <div className="section1">
          <button type="button" className="number">7</button>
          <button type="button" className="number">8</button>
          <button type="button" className="number">9</button>
          <button type="button" className="side-symbols">x</button>
        </div>
        <div className="section1">
          <button type="button" className="number">4</button>
          <button type="button" className="number">5</button>
          <button type="button" className="number">6</button>
          <button type="button" className="side-symbols">-</button>
        </div>
        <div className="section1">
          <button type="button" className="number">1</button>
          <button type="button" className="number">2</button>
          <button type="button" className="number">3</button>
          <button type="button" className="side-symbols">+</button>
        </div>
        <div className="section1">
          <button type="button" className="number0">0</button>
          <button type="button" className="number">.</button>
          <button type="button" className="side-symbols">=</button>
        </div>

      </div>
    );
  }
}
export default Calculator;
