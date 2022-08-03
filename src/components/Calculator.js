/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  showResult = (e) => {
    this.setState({
      total: e.target.textContent,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="answer" onChange={this.showResult}>
          {total}
          {operation}
          {next}
        </div>
        <div className="section1">
          <button onClick={this.clickHandler} type="button" className="number">AC</button>
          <button onClick={this.clickHandler} type="button" className="number">+/-</button>
          <button onClick={this.clickHandler} type="button" className="number">%</button>
          <button onClick={this.clickHandler} type="button" className="side-symbols">÷</button>
        </div>
        <div className="section1">
          <button onClick={this.clickHandler} type="button" className="number">7</button>
          <button onClick={this.clickHandler} type="button" className="number">8</button>
          <button onClick={this.clickHandler} type="button" className="number">9</button>
          <button onClick={this.clickHandler} type="button" className="side-symbols">x</button>
        </div>
        <div className="section1">
          <button onClick={this.clickHandler} type="button" className="number">4</button>
          <button onClick={this.clickHandler} type="button" className="number">5</button>
          <button onClick={this.clickHandler} type="button" className="number">6</button>
          <button onClick={this.clickHandler} type="button" className="side-symbols">-</button>
        </div>
        <div className="section1">
          <button onClick={this.clickHandler} type="button" className="number">1</button>
          <button onClick={this.clickHandler} type="button" className="number">2</button>
          <button onClick={this.clickHandler} type="button" className="number">3</button>
          <button onClick={this.clickHandler} type="button" className="side-symbols">+</button>
        </div>
        <div className="section1">
          <button onClick={this.clickHandler} type="button" className="number0">0</button>
          <button onClick={this.clickHandler} type="button" className="number">.</button>
          <button onClick={this.clickHandler} type="button" className="side-symbols">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
