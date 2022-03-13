import './App.css';

import Header from './components/Header/Header';
import CurrencyExchange from './components/Main/CurrencyExchange/CurrencyExchange';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <CurrencyExchange />
      </div>
    </>
  );
}

export default App;
