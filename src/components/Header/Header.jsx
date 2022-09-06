import React from "react";
import Search from "../Search/Search";
import "../styles/Header.css";

const Header = (searchHandler) => {
  return (
    <div>
      <section className="navBar">
        <div className="titleContainer">
          <h1 className="title">Pokemon Mania</h1>
        </div>
        <div className="searchContainer">
          <Search />
        </div>
      </section>
    </div>
  );
};

export default Header;
