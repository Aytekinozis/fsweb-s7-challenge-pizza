import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Assets/logo-footer.svg";
import icon1 from "../Assets/adv-aseets/icons/icon-1.png";
import icon2 from "../Assets/adv-aseets/icons/icon-2.png";
import icon3 from "../Assets/adv-aseets/icons/icon-3.png";
import insta1 from "../Assets/adv-aseets/insta/li-0.png";
import insta2 from "../Assets/adv-aseets/insta/li-1.png";
import insta3 from "../Assets/adv-aseets/insta/li-2.png";
import insta4 from "../Assets/adv-aseets/insta/li-3.png";
import insta5 from "../Assets/adv-aseets/insta/li-4.png";
import insta6 from "../Assets/adv-aseets/insta/li-5.png";

const Footer = () => {
  return (
    <div id="footer">
      <div id="logo-menu-insta">
        <div id="logo-menu">
          <div id="logo-adres">
            <img src={logo} />
            <div className="icon-adres">
              <img className="me-2 icon1" src={icon1} />
              <p>
                341 Londonderry Road,<br></br> Istanbul Türkiye
              </p>
            </div>
            <div className="icon-adres">
              <img className="me-2" src={icon2} />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="icon-adres">
              <img className="me-2" src={icon3} />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div id="menuler">
            <h4>Sıccacık Menuler</h4>
            <a>Terminal Pizza</a>
            <a>5 Kişilik Hackathlon Pizza</a>
            <a>useEffect Tavuklu Pizza</a>
            <a>Beyaz Console Frosty</a>
            <a>Testler Geçti Mutlu Burger</a>
            <a>Position Absolute Acı Burger</a>
          </div>
        </div>
        <div id="insta">
          <h4>Instagram</h4>
          <div id="photos">
            <img src={insta1} className="photo" />
            <img src={insta2} className="photo" />
            <img src={insta3} className="photo" />
            <img src={insta4} className="photo" />
            <img src={insta5} className="photo" />
            <img src={insta6} className="photo" />
          </div>
        </div>
      </div>
      <div>
        <p>© 2023 Teknolojik Yemekler.</p>
        <FontAwesomeIcon
          icon="fa-brands fa-twitter"
          style={{ color: "#ffffff" }}
        />
      </div>
    </div>
  );
};
export default Footer;
