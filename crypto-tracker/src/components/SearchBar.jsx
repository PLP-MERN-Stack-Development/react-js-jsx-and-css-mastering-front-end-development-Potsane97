// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ value, onChange, placeholder = "Search cryptocurrency..." }) => (
  <div className="mb-4">
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
