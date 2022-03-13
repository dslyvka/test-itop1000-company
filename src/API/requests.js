export const convert = async (from, to) => {
  return await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`,
  ).then(res => res.json());
};

export const getCurrentExchangeRates = async () => {
  const USD = await fetch(
    `https://api.exchangerate.host/convert?from=USD&to=UAH`,
  )
    .then(res => res.json())
    .then(res => res.result);
  const EUR = await fetch(
    `https://api.exchangerate.host/convert?from=EUR&to=UAH`,
  )
    .then(res => res.json())
    .then(res => res.result);

  return { USD, EUR };
};
