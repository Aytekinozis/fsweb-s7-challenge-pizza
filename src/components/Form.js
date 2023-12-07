import React, { useEffect, useState } from "react";
import "./Form.css";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import Counter from "./Counter";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import pizza from "../Assets/adv-aseets/adv-form-banner.png";
import Footer from "./Footer";
import { Link, Route, Router, Switch } from "react-router-dom";

const Form = (props) => {
  const {
    setOrder,
    order,
    setCounter,
    counter,
    toplFiyat,
    setToplFiyat,
    malzemeFiyat,
    setMalzemeFiyat,
  } = props;

  const initState = {
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler1: false,
    malzemeler2: false,
    malzemeler3: false,
    malzemeler4: false,
    malzemeler5: false,
    malzemeler6: false,
    malzemeler7: false,
    malzemeler8: false,
    malzemeler9: false,
    malzemeler10: false,
    malzemeler11: false,
    malzemeler12: false,
    malzemeler13: false,
    note: "",
    fiyat: 85.5,
    active: "",
  };

  const [formState, setFormState] = useState(initState);
  const [aratopl, setAratopl] = useState(85.5);

  const [errState, setErrState] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler1: "",
    malzemeler2: "",
    malzemeler3: "",
    malzemeler4: "",
    malzemeler5: "",
    malzemeler6: "",
    malzemeler7: "",
    malzemeler8: "",
    malzemeler9: "",
    malzemeler10: "",
    malzemeler11: "",
    malzemeler12: "",
    malzemeler13: "",
    note: "",
  });

  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  const formSchema = Yup.object().shape({
    isim: Yup.string()
      .required("İsim alanı doldurulması zorunludur")
      .min(3, "minimum 3 karakter olmalıdır"),
    note: Yup.string(),
    boyut: Yup.string().required("Seçim Yapılmalı"),
    hamur: Yup.string().required("Seçim Yapılmalı"),
    malzemeler1: Yup.boolean(),
    malzemeler2: Yup.boolean(),
    malzemeler3: Yup.boolean(),
    malzemeler4: Yup.boolean(),
    malzemeler5: Yup.boolean(),
    malzemeler6: Yup.boolean(),
    malzemeler7: Yup.boolean(),
    malzemeler8: Yup.boolean(),
    malzemeler9: Yup.boolean(),
    malzemeler10: Yup.boolean(),
    malzemeler11: Yup.boolean(),
    malzemeler12: Yup.boolean(),
    malzemeler13: Yup.boolean(),
  });

  const inputChangeHandler = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    //console.log(key);

    Yup.reach(formSchema, key)
      .validate(value)
      .then((r) => {
        setErrState({ ...errState, [key]: "" });
      })
      .catch((e) => {
        setErrState({ ...errState, [key]: e.message });
      });

    setFormState({ ...formState, [key]: value });
    setOrder({ ...order, [key]: value });
  };

  const checkboxHandler = (event) => {
    const key = event.target.name;
    const value = event.target.checked;
    const ordervalue = event.target.value;

    Yup.reach(formSchema, key)
      .validate(value)
      .then((r) => {
        setErrState({ ...errState, [key]: "" });
      })
      .catch((e) => {
        setErrState({ ...errState, [key]: e.message });
      });

    setFormState({ ...formState, [key]: value });
    setOrder({ ...order, [key]: ordervalue });
    setAratopl(value ? aratopl + 5 : aratopl - 5);
    setMalzemeFiyat(value ? malzemeFiyat + 5 : malzemeFiyat - 5);
    setToplFiyat(value ? toplFiyat + 5 : toplFiyat - 5);
    console.log("aratop:", aratopl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      axios
        .post("https://reqres.in/api/users", order)
        .then((res) => {
          console.log(res);
          setOrder(res.data);

          history.push("/Success");
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  useEffect(() => {
    setToplFiyat(aratopl * counter);
    setFormState({ ...formState, ["fiyat"]: toplFiyat });
    console.log("degisti");
    //console.log(aratopl);
  }, [counter, toplFiyat]);

  useEffect(() => {
    const fiyat = formState.fiyat;

    setFormState({ ...formState, ["fiyat"]: toplFiyat });
  }, [
    formState.malzemeler1,
    formState.malzemeler2,
    formState.malzemeler3,
    formState.malzemeler4,
    formState.malzemeler5,
    formState.malzemeler6,
    formState.malzemeler7,
    formState.malzemeler8,
    formState.malzemeler9,
    formState.malzemeler10,
    formState.malzemeler11,
    formState.malzemeler12,
    formState.malzemeler13,
  ]);

  useEffect(() => {
    if (malzemeFiyat >= 20) {
      formSchema.isValid(formState).then((valid) => {
        setIsValid(valid);
      });
    }
    if (malzemeFiyat > 50 || malzemeFiyat < 20) {
      formSchema.isValid(formState).then((valid) => {
        setIsValid(false);
      });
    }

    //console.log(formState);
  }, [formState]);

  return (
    <div id="form-page">
      <Header></Header>
      <div id="beige">
        <div>
          <img id="pizzabanner" src={pizza}></img>

          <h4 className="bejbolum">Position Absolute Acı Pizza</h4>
          <div id="fiyat" className="bejbolum">
            <h4>85.50₺</h4>
            <div id="puan-yorum">
              <p>4.9</p>
              <p>(200)</p>
            </div>
          </div>
          <p className="bejbolum">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
      <div id="pizza-form">
        <form onSubmit={handleSubmit}>
          <div id="size-dough">
            <div id="size-radio">
              <h4>Boyut Seç *</h4>
              <FormGroup>
                <Input
                  name="boyut"
                  type="radio"
                  onChange={inputChangeHandler}
                  value={"Küçük"}
                />{" "}
                <Label>Küçük</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  name="boyut"
                  type="radio"
                  onChange={inputChangeHandler}
                  value={"Orta"}
                />{" "}
                <Label>Orta</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  name="boyut"
                  type="radio"
                  onChange={inputChangeHandler}
                  value={"Büyük"}
                />{" "}
                <Label>Büyük</Label>
              </FormGroup>
            </div>

            <div>
              <h4>Hamur Seç *</h4>
              <FormGroup>
                <Input
                  data-cy="hamur"
                  name="hamur"
                  type="select"
                  onChange={inputChangeHandler}
                >
                  <option disabled selected>
                    Hamur Kalınlığı
                  </option>
                  <option>İnce</option>
                  <option data-cy="orta">Orta</option>
                  <option>Kalın</option>
                </Input>
              </FormGroup>
            </div>
          </div>
          <div>
            <h4>Ek Malzemeler</h4>
            <p>En Az 4, En Fazla 10 malzeme seçebilirsiniz. Adet Ücreti: 5₺</p>
          </div>
          <div id="checkbox-area">
            <FormGroup>
              <Input
                type="checkbox"
                name="malzemeler1"
                checked={formState.malzemeler1}
                onChange={checkboxHandler}
                className="me-2"
                value={"Pepperoni"}
              />
              <Label>Pepperoni</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler2}
                name="malzemeler2"
                onChange={checkboxHandler}
                className="me-2"
                value={"Tavuk Izgara"}
              />
              <Label>Tavuk Izgara</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler3}
                name="malzemeler3"
                onChange={checkboxHandler}
                className="me-2"
                value={"Mısır"}
              />
              <Label>Mısır</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler4}
                name="malzemeler4"
                onChange={checkboxHandler}
                className="me-2"
                value={"Sarımsak"}
              />
              <Label>Sarımsak</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler5}
                name="malzemeler5"
                onChange={checkboxHandler}
                className="me-2"
                value={"Ananas"}
              />
              <Label>Ananas</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler6}
                name="malzemeler6"
                onChange={checkboxHandler}
                className="me-2"
                value={"Sosis"}
              />
              <Label>Sosis</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler7}
                name="malzemeler7"
                onChange={checkboxHandler}
                className="me-2"
                value={"Soğan"}
              />
              <Label>Soğan</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler8}
                name="malzemeler8"
                onChange={checkboxHandler}
                className="me-2"
                value={"Sucuk"}
              />
              <Label>Sucuk</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler9}
                name="malzemeler9"
                onChange={checkboxHandler}
                className="me-2"
                value={"Biber"}
              />
              <Label>Biber</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler10}
                name="malzemeler10"
                onChange={checkboxHandler}
                className="me-2"
                value={"Kabak"}
              />
              <Label>Kabak</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler11}
                name="malzemeler11"
                onChange={checkboxHandler}
                className="me-2"
                value={"Kanada Jambonu"}
              />
              <Label>Kanada Jambonu</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler12}
                name="malzemeler12"
                onChange={checkboxHandler}
                className="me-2"
                value={"Domates"}
              />
              <Label>Domates</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                checked={formState.malzemeler13}
                name="malzemeler13"
                onChange={checkboxHandler}
                className="me-2"
                value={"Jalepeno"}
              />
              <Label>Jalepeno</Label>
            </FormGroup>
          </div>
          <div>
            <h4>İsim*</h4>
            <FormGroup>
              <Input
                invalid={!!errState.isim}
                type="text"
                value={formState.isim}
                name="isim"
                onChange={inputChangeHandler}
                placeholder="isim"
              />
              <FormFeedback>{errState.isim}</FormFeedback>
            </FormGroup>
          </div>
          <div id="siparisborder">
            <h4>Sipariş Notu</h4>
            <FormGroup>
              <Input
                type="text"
                value={formState.note}
                name="note"
                onChange={inputChangeHandler}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </FormGroup>
          </div>
          <div id="siparis-ozet">
            <Counter setCounter={setCounter} counter={counter}></Counter>
            <div id="siparisver-div">
              <div id="siparis-div">
                <h4>Sipariş Toplamı</h4>
                <div>
                  <div className="fiyat-bar">
                    <p>Seçimler</p>
                    <p>{malzemeFiyat}₺</p>
                  </div>
                  <div className="fiyat-bar">
                    <p>Toplam</p>
                    <p>{formState.fiyat}₺</p>
                  </div>
                </div>
              </div>
              <Button
                disabled={!isValid}
                onSubmit={handleSubmit}
                color="warning"
              >
                SİPARİŞ VER
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Form;
