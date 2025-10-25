// src/api/cryptoApi.js
const BASE_URL = "https://api.coingecko.com/api/v3";

export const getTopCoins = async (per_page = 20) => {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per_page}&page=1&sparkline=false`
  );
  if (!res.ok) throw new Error("Failed to fetch coins");
  return res.json();
};
