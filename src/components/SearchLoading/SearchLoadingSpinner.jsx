import React from "react";
import "../styles/SearchLoadingSpinner.css";

const SearchLoadingSpinner = () => {
  return (
    <div>
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  );
};

export default SearchLoadingSpinner;
