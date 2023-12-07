import React from "react";
import Header from "./Header";
import "./Success.css";

const Success = (props) => {
  const { order, toplFiyat, malzemeFiyat, counter } = props;
  return (
    <div id="success-page">
      <Header></Header>
      <p id="order-valid">
        TEBRİKLER!<br></br> SİPARİŞİNİZ ALINDI!
      </p>
      <div id="order-sum">
        <h3>Position Absolute Acı Pizza</h3>
        <h4 id="isim">İsminiz: {order.isim}</h4>
        <p>Boyut: {order.boyut}</p>
        <p>Hamur: {order.hamur}</p>
        <p>
          Ek Malzemeler: {order.malzemeler1 ? order.malzemeler1 + ", " : ""}
          {order.malzemeler2 ? order.malzemeler2 + ", " : ""}
          {order.malzemeler3 ? order.malzemeler3 + ", " : ""}
          {order.malzemeler4 ? order.malzemeler4 + ", " : ""}
          {order.malzemeler5 ? order.malzemeler5 + ", " : ""}
          {order.malzemeler6 ? order.malzemeler6 + ", " : ""}
          {order.malzemeler7 ? order.malzemeler7 + ", " : ""}
          {order.malzemeler8 ? order.malzemeler8 + ", " : ""}
          {order.malzemeler9 ? order.malzemeler9 + ", " : ""}
          {order.malzemeler10 ? order.malzemeler10 + ", " : ""}
          {order.malzemeler11 ? order.malzemeler11 + ", " : ""}
          {order.malzemeler12 ? order.malzemeler12 + ", " : ""}
          {order.malzemeler13}
        </p>
        <p>Not: {order.note}</p>
      </div>
      <div id="checkout">
        <h4>Sipariş Toplamı</h4>
        <div className="secim-toplam">
          <p>Seçimler</p>
          <p>{malzemeFiyat}₺</p>
        </div>
        <div className="secim-toplam">
          <p>Adet</p>
          <p>x{counter}</p>
        </div>
        <div className="secim-toplam">
          <p>Toplam</p>
          <p>{toplFiyat}₺</p>
        </div>
      </div>
    </div>
  );
};
export default Success;
