import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
