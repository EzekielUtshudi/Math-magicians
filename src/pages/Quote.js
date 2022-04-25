import { useEffect, useState } from 'react';
import styles from './Quote.module.css';

const Quote = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await response.json();
      setState(data);
    };
    fetchQuote();
    const it = setInterval(fetchQuote, 8000);
    return () => {
      clearInterval(it);
    };
  }, []);

  return (
    <div className={styles.quoteBox}>
      { state
        ? (
          <div>
            <p className={styles.quote}>
              &quot;
              {state.quote}
              &quot;
            </p>
            <p className={styles.author}>
              {'- '}
              {state.author}
            </p>
          </div>
        )
        : <p>Loading</p>}
    </div>
  );
};

export default Quote;
