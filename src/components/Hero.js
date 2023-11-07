import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";
import head_img from './../assets/hero.webp'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-page">
        <div className="hero-content">
          <h1>Creating Memorable Events with Precision and Perfection</h1>
          <p>
            KD events is a premier event management company based in Jaipur. Our
            exceptional planning, venue management, and on-site coordination
            ensure an unforgettable experience for you and your guests.
          </p>
          <Link to="#services">
          <button className="btn btn-primary p-3 mb-4">View All Services</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={head_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
