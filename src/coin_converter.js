import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 배열로 저장할 것이므로 빈 배열로 초기화해줘야 함
  const [dollar, setDollar] = useState();
  const [coin, setCoin] = useState(1);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // 따로 key 발급받을 필요 없음(코인 정보 api)
    .then((res) => res.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  const onSelect = (event) => {
    setCoin(event.target.value);
  };
  // console.log(coin);
  
  const onDollarChange = (event) => {
    setDollar(event.target.value);
    // console.log(event.target.value);
    // console.log(dollar)
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (dollar === "") {
      return;
    }
    setDollar("");
  }

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <h2>Loading...</h2> : (
      <div>
        <select onChange={onSelect} value={coin}>
          <option>-----Select Coin------</option>
          {coins.map((el, index) => {
            return (
            <option key={index} value={el.quotes.USD.price}>
              {el.name} ({el.symbol}) : {el.quotes.USD.price} (USD)
            </option> // coins 요소들의 json 데이터는 api 나 콘솔로그를 통해 확인
            )
          })}
        </select>
        <hr />
        <h3>Converting Money</h3>
        <form onSubmit={onSubmit}>
          <input 
            type="number" 
            placeholder="Dollars" 
            onChange={onDollarChange} 
            value={dollar}
            disabled={coin === 1 ? true : false}
          />
          <button>Reset</button>
        </form>
        <hr />
        <h2>You can get " {(dollar / coin) ? (dollar / coin) : coin} " coins!</h2>
      </div> 
    )}
    </div>
  )
}

export default App;
