import React from 'react';
import logo from "../images/logo.png"

const Banner = () => {
  return (
    <section className="home">
      <div className="tittle-block">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <h1>DELICIOUS Food</h1>
        <h2>Welcome to your one-stop Recipe Finder App</h2>
      </div>
    </section>
  );
};

export default Banner;