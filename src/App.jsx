import CoinCard from "./components/CoinCard"

function App() {
  const coin = {
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    name: "Bitcoin",
    symbol: "btc",
    current_price: 67000,
    price_change_percentage_24h: 2.5,
    market_cap: 1300000000000
  };

  return (
    <div>
      <h1>Crypto App</h1>
      <CoinCard coin={coin} />
    </div>
  );
}

export default App;
