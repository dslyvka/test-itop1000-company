import { useState, useEffect } from 'react';

import { convert } from '../../../API/requests';

import { MainStyled } from './CurrencyExchange.styled';

export default function CurrencyExchange() {
  const [from, setFrom] = useState('USD'); // from currency
  const [to, setTo] = useState('UAH'); // to currency
  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(0);
  const [current, setCurrent] = useState(0); //current exchange rate
  const [action, setAction] = useState(''); //
  console.log(
    'current: ' + current + ', valueFrom: ' + valueFrom + ', valueTo: ',
    valueTo,
  );

  useEffect(() => {
    convert(from, to).then(res => setCurrent(res.result.toFixed(2)));
  }, []);

  useEffect(() => {
    convert(from, to).then(res => setCurrent(res.result.toFixed(2)));
  }, [from, to]);

  useEffect(() => {
    switch (action) {
      case 'from':
        setValueTo((current / valueFrom).toFixed(2));
        // console.log('done');
        // console.log('valueFrom: ', valueFrom);
        break;

      case 'to':
        console.log(action);
        setValueTo((current * valueFrom).toFixed(2));
        // console.log('done');
        // console.log('valueTo: ', valueTo);
        break;

      default:
        break;
    }
  }, [current]);

  //   console.log('valueFrom: ', valueFrom);
  //   console.log('valueTo: ', valueTo);

  const onSelectChange = e => {
    const currency = e.currentTarget.value;
    const action = e.currentTarget.getAttribute('data-action');

    // console.log('action: ', action);
    // console.log('currency: ', currency);
    switch (action) {
      case 'from':
        setFrom(currency);
        setAction(action);
        // setValueFrom((valueTo * current).toFixed(2));
        console.log('valueFrom: ', valueFrom);
        break;

      case 'to':
        console.log(action);
        setTo(currency);
        setAction(action);
        // setValueTo((valueFrom * current).toFixed(2));
        console.log('valueTo: ', valueTo);
        break;

      default:
        break;
    }
  };

  const onInputFromChange = e => {
    // const action = e.currentTarget.getAttribute('data-action');
    const value = e.currentTarget.value;
    // console.log('value: ', typeof value, value);

    setValueFrom(value);
    setValueTo((value * current).toFixed(2));

    // setValueTo(value);
    // setValueFrom((value / current).toFixed(2));
  };

  const onInputToChange = e => {
    // const action = e.currentTarget.getAttribute('data-action');
    const value = e.currentTarget.value;
    // console.log('value: ', typeof value, value);

    // setValueFrom(value);
    // setValueTo((value * current).toFixed(2));

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
          {/* <img src={doubleArrow} alt="double arrows" width={150}></img> */}
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
