// src/components/CoinCard.jsx
import React from "react";

const CoinCard = ({ coin }) => {
  const { name, image, current_price, price_change_percentage_24h, symbol } = coin;
  const priceChangeClass = price_change_percentage_24h >= 0 ? "text-success" : "text-danger";

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 text-center p-3">
        <img src={image} alt={name} className="img-fluid mx-auto" style={{ width: 48 }} />
        <h6 className="mt-2 mb-0">{name}</h6>
        <small className="text-muted">{symbol.toUpperCase()}</small>

        <div className="mt-2">
          <div className="h5 mb-0">${current_price?.toLocaleString()}</div>
          <div className={`fw-bold ${priceChangeClass}`}>
            {price_change_percentage_24h?.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
