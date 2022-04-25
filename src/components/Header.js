import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </nav>
  </header>
);

export default Header;
