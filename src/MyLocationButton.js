import React from "react";

import "./MyLocationButton.css";

export default function MyLocationButton() {
  return (
    <div className="MyLocationButton">
      <div className="form-group">
        <input
          type="submit"
          value="My Location"
          className="form-control rounded-pill current-button"
          autoComplete="on"
        />
      </div>
    </div>
  );
}
