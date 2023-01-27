import React from "react";
import "../CSS/CustomCard.css";

function CustomCard(props) {
  return (
    <div className="card-body">
      <img
        class="blog-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />

      <div class="blog-description"></div>
      <div class="hero-logo">
        <img
          src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg"
          alt=""
        ></img>
      </div>

      <div class="hero-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="hero-date">
        <p>20.02.2019</p>
      </div>

      <div class="hero-btn">
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

export default CustomCard;
