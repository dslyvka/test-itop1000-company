import { useState, useEffect } from 'react';

import { convert } from '../../../API/requests';

import { MainStyled } from './CurrencyExchange.styled';

export default function CurrencyExchange() {
  const [from, setFrom] = useState('USD'); // from currency
  const [to, setTo] = useState('UAH'); // to currency
  const [valueFrom, setValueFrom] = useState(''); //what currency are we converting from
  const [valueTo, setValueTo] = useState(''); //what currency are we converting to
  const [current, setCurrent] = useState(0); //current exchange rate

  useEffect(() => {
    convert(from, to).then(res => setCurrent(res.result.toFixed(2)));
  }, []);

  useEffect(() => {
    convert(from, to).then(res => setCurrent(res.result.toFixed(2)));
  }, [from, to]);

  useEffect(() => {
    setValueTo((current * valueFrom).toFixed(2));
  }, [current]);

  const onSelectChange = e => {
    const currency = e.currentTarget.value;
    const action = e.currentTarget.getAttribute('data-action');

    switch (action) {
      case 'from':
        setFrom(currency);
        break;

      case 'to':
        setTo(currency);
        break;

      default:
        break;
    }
  };

  const onInputFromChange = e => {
    const value = e.currentTarget.value;

    if (value <= -1) return;
    setValueFrom(value);
    setValueTo((value * current).toFixed(2));
  };

  const onInputToChange = e => {
    const value = e.currentTarget.value;

    if (value <= -1) return;
    setValueTo(value);
    setValueFrom((value / current).toFixed(2));
  };

  return (
    <>
      <MainStyled>
        <h1>Currency Exchange</h1>
        <form action="">
          <label htmlFor="">
            <b> Convert from</b>
            <select name="" id="" onChange={onSelectChange} data-action="from">
              <option value="USD">USD $</option>
              <option value="EUR">EUR &euro;</option>
              <option value="UAH">UAH ₴</option>
            </select>
            <input
              type="number"
              min={1}
              data-action="from"
              onChange={onInputFromChange}
              value={valueFrom}
            />
          </label>
          <label htmlFor="">
            <b>Convert to</b>
            <select name="" id="" onChange={onSelectChange} data-action="to">
              <option value="UAH">UAH ₴</option>
              <option value="USD">USD $</option>
              <option value="EUR">EUR &euro;</option>
            </select>
            <input
              type="number"
              min={1}
              data-action="to"
              onChange={onInputToChange}
              value={valueTo}
            />
          </label>
        </form>
      </MainStyled>
    </>
  );
}
