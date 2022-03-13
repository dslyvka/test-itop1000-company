import { useState, useEffect } from 'react';

import { getCurrentExchangeRates } from '../../API/requests';

export default function Header() {
  const [ExchangeRates, setExchangeRates] = useState({});
  useEffect(() => {
    getCurrentExchangeRates().then(res => setExchangeRates(res));
  }, []);
  // console.log('ex: ', ExchangeRates);
  return (
    <>
      <header>
        <ul>
          <li>{ExchangeRates?.EUR ? ExchangeRates.EUR : 0}&euro;</li>
          <li>{ExchangeRates?.USD ? ExchangeRates.USD : 0}$</li>
        </ul>
      </header>
    </>
  );
}
