
import React, { useState, useEffect } from 'react';

import axios from 'axios'
import CryptoContainer from './CryptoContainer/CryptoContainer.js'
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
  const filterCrypto = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className='crypto-text'>Cryptocurrency Tracker</h1>
        <form>
          <input className="crypto-input" type='text' placeholder='Search for cryptocurrency...' onChange={handleChange}></input>
        
      </form>
      <div className='crypto-container'>
            <div className="crypto-row">
                <div className = "crypto">
                
                <h1 className="crypto-name">Name</h1>
                <p> Symbol</p>
                </div>
                <div className="crypto-data">
                    <p className = "crypto-price">Price</p>
                    <p className="crypto-percent"> Percent Change</p> 
                    <p className = "crypto-marketcap"> Market Cap</p>

                </div>
            </div>
        </div>
        <div>{filterCrypto.map(coin => {
          return (
            <CryptoContainer
              key={coin.id}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              name={coin.name}
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


