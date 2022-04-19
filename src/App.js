import { useState } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const updateDetails = (e) => {
    const newObj = calculate(state, e.target.textContent);
    setState(newObj);
  };

  const { next, operation, total } = state;
  const op = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }

  return (
    <Calculator
      updateDetails={updateDetails}
      value={result}
    />
  );
};

export default App;
