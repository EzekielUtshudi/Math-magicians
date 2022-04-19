import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { updateDetails, value } = this.props;
    return (
      <div className="container">
        <div className="screen">
          {value || 0}
        </div>
        <div className="buttons">
          <button onClick={updateDetails} type="button">AC</button>
          <button onClick={updateDetails} type="button">+/-</button>
          <button onClick={updateDetails} type="button">%</button>
          <button onClick={updateDetails} className="orange" type="button">&divide;</button>
          <button onClick={updateDetails} type="button">7</button>
          <button onClick={updateDetails} type="button">8</button>
          <button onClick={updateDetails} type="button">9</button>
          <button onClick={updateDetails} className="orange" type="button">&times;</button>
          <button onClick={updateDetails} type="button">4</button>
          <button onClick={updateDetails} type="button">5</button>
          <button onClick={updateDetails} type="button">6</button>
          <button onClick={updateDetails} className="orange" type="button">&minus;</button>
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

Calculator.propTypes = {
  updateDetails: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Calculator;
