// src/App.jsx
import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { getTopCoins } from "./api/cryptoApi";
import SearchBar from "./components/SearchBar";
import CoinCard from "./components/CoinCard";

// existing components you already have
import Button from "./components/Button";
import TaskManager from "./components/TaskManager";

const App = () => {
  // fetch top 20 coins once on mount
  const { data: coins, loading, error } = useFetch(() => getTopCoins(20), []);
  const [search, setSearch] = useState("");

  const filteredCoins = (coins || []).filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="text-center mb-3">💰 Crypto Tracker</h1>

        {/* keep your components (they won't break) */}
        <div className="d-flex justify-content-center gap-2 mb-3">
          <Button />
          <AskManager />
        </div>

        <SearchBar value={search} onChange={setSearch} />
      </header>

      <main>
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && (
          <div className="row">
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
            ) : (
              <div className="col-12 text-center text-muted">No results found.</div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
