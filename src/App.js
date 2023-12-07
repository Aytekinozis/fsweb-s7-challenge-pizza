import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Success from "./components/Success";
import { useEffect } from "react";

const App = () => {
  const [order, setOrder] = useState();
  const [counter, setCounter] = useState(1);
  const [toplFiyat, setToplFiyat] = useState(0);
  const [malzemeFiyat, setMalzemeFiyat] = useState(0);

  useEffect(() => {
    console.log(order);
    console.log(toplFiyat);
    console.log(counter);
  }, [order]);

  useEffect(() => {
    console.log("app degist");
  }, [counter]);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Pizza">
          <Form
            setOrder={setOrder}
            order={order}
            setCounter={setCounter}
            counter={counter}
            toplFiyat={toplFiyat}
            setToplFiyat={setToplFiyat}
            malzemeFiyat={malzemeFiyat}
            setMalzemeFiyat={setMalzemeFiyat}
          />
        </Route>
        <Route path="/Success">
          <Success
            order={order}
            toplFiyat={toplFiyat}
            malzemeFiyat={malzemeFiyat}
            counter={counter}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
