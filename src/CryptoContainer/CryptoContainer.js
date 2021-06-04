import React from 'react';
import './CryptoContainer.css'
const CryptoContainer = ({ name, image, symbol, price, priceChange, marketcap}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className = "coin">
                <img src={image} alt="coin" />
                <h1>{name}</h1>
                <p className="coin-symbol"> {symbol}</p>
                </div>
                <div className="coin-data">
                    <p className = "coin-price">${price.toLocaleString()}</p>
                    {priceChange < 0 ? <p className="coin-percent red"> {priceChange.toFixed(1)}%</p> : 
                    <p className="coin-percent green"> {priceChange.toFixed(1)}%</p>  }
                     <p className = "coin-marketcap"> ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default CryptoContainer