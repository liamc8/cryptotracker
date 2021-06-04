
import React, { useState, useEffect } from 'react';

import axios from 'axios'
import Coin from './Coin/Coin.js'
import './App.css';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(err => {
        // what now?
        console.log(err);
      })
  }, [])


  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filterCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className='coin-text'>Cryptocurrency Tracker</h1>
        <form>
          <input className="coin-input" type='text' placeholder='Search for coin...' onChange={handleChange}></input>
        
      </form>
      <div className='coin-container'>
            <div className="coin-row">
                <div className = "coin">
                
                <h1 className="coin-name">Name</h1>
                <p className="coin-symbol-v"> Symbol</p>
                </div>
                <div className="coin-data">
                    <p className = "coin-price">Price</p>
                    <p className = "coin-volume"> Volume</p>
                    <p className="coin-percent"> Percent Change</p> 
                    <p className = "coin-marketcap"> Market Cap</p>

                </div>
            </div>
        </div>
        <div>{filterCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              name={coin.name}
              volume={coin.total_volume}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
            />
          )
        })}</div>

        <footer>Made for CSCI 169 Programming Languages, powered by CoinGecko API</footer>
      </div>
    </div>
  );
}

export default App


