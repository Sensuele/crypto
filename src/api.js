const API_KEY =
  "d0a99de5f829be9b702a7681cc4cb90b4829b7d42fa5f626b104afed88aec7f1";

export const loadTicker = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(
      ","
    )}&api_key=${API_KEY}`
  ).then((r) => r.json());
