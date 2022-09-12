import React from "react";
import "../styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div>
      <section className="loading">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSpinner;
