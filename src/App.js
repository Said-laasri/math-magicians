/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="AppCalcul">
        <Calculator />
      </div>
    );
  }
}

export default App;
