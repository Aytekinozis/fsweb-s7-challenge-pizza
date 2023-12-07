import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import banner from "../Assets/mvp-banner.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>

      <div id="order-pizza" style={{ backgroundImage: `url(${banner})` }}>
        <p id="pizza-banner">
          KOD ACIKTIRIR <br></br> PIZZA, DOYURUR
        </p>
        <Link className="aciktim-link btn btn-warning" to="/Pizza">
          Acıktım
        </Link>{" "}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
