import React from 'react';
import './CryptoContainer.css'
const CryptoContainer = ({ name, image, symbol, price, priceChange, marketcap}) => {
    return (
        <div className='crypto-container'>
            <div className="crypto-row">
                <div className = "crypto">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="crypto-symbol"> {symbol}</p>
                </div>
                <div className="crypto-data">
                    <p className = "crypto-price">${price.toLocaleString()}</p>
                    {priceChange < 0 ? <p className="crypto-percent red"> {priceChange.toFixed(1)}%</p> : 
                    <p className="crypto-percent green"> {priceChange.toFixed(1)}%</p>  }
                     <p className = "crypto-marketcap"> ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default CryptoContainer