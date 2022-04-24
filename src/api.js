const API_KEY =
  "d0a99de5f829be9b702a7681cc4cb90b4829b7d42fa5f626b104afed88aec7f1";

const tickers = new Map();

export const loadTickers = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );

export const subscribeToTicker = (ticker, cb) => {
  if (!tickers.has(ticker)) {
    tickers.set(ticker, []);
  }

  const subscribers = ticker.get(ticker) || [];
  tickers.set(ticker, [...subscribers, cb]);
};
