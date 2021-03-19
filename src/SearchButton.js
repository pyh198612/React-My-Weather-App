import React from "react";

import "./SearchButton.css";

export default function SearchButton() {
  return (
    <div className="SearchButton">
      <div className="form-group">
        <input
          type="submit"
          value="Search"
          className="form-control rounded-pill search-button"
          autoComplete="on"
        />
      </div>
    </div>
  );
}
