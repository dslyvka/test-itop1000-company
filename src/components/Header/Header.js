import { useState, useEffect } from 'react';

import { getCurrentExchangeRates } from '../../API/requests';

import { HeaderStyled } from './Header.styled';

export default function Header() {
  const [ExchangeRates, setExchangeRates] = useState({});
  useEffect(() => {
    const asyncShell = async () => {
      await getCurrentExchangeRates().then(res => setExchangeRates(res));
    };
    asyncShell();
  }, []);
  // console.log('ex: ', ExchangeRates);
  return (
    <>
      <HeaderStyled>
        <a href="/">CE</a>
        <ul>
          <li>1 EUR = {ExchangeRates?.EUR ? ExchangeRates.EUR : 0} UAH</li>
          <li>1 USD = {ExchangeRates?.USD ? ExchangeRates.USD : 0} UAH</li>
        </ul>
      </HeaderStyled>
    </>
  );
}
