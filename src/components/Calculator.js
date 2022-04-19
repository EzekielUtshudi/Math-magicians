import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  render() {
    const updateDetails = (e) => {
      const newObj = calculate(this.state, e.target.textContent);
      this.setState(newObj);
    };

    const { next, operation, total } = this.state;
    const op = operation === '%' ? 'mod' : operation;
    let result = '';
    if (total) {
      result = `${total} ${op || ''} ${next || ''}`;
    } else if (next) {
      result = `${next} ${op || ''}`;
    }
    return (
      <div className="container">
        <div className="screen">
          {result || 0}
        </div>
        <div className="buttons">
          <button onClick={updateDetails} type="button">AC</button>
          <button onClick={updateDetails} type="button">+/-</button>
          <button onClick={updateDetails} type="button">%</button>
          <button onClick={updateDetails} className="orange" type="button">&divide;</button>
          <button onClick={updateDetails} type="button">7</button>
          <button onClick={updateDetails} type="button">8</button>
          <button onClick={updateDetails} type="button">9</button>
          <button onClick={updateDetails} className="orange" type="button">x</button>
          <button onClick={updateDetails} type="button">4</button>
          <button onClick={updateDetails} type="button">5</button>
          <button onClick={updateDetails} type="button">6</button>
          <button onClick={updateDetails} className="orange" type="button">-</button>
          <button onClick={updateDetails} type="button">1</button>
          <button onClick={updateDetails} type="button">2</button>
          <button onClick={updateDetails} type="button">3</button>
          <button onClick={updateDetails} className="orange" type="button">+</button>
          <button onClick={updateDetails} className="double" type="button">0</button>
          <button onClick={updateDetails} type="button">.</button>
          <button onClick={updateDetails} className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
