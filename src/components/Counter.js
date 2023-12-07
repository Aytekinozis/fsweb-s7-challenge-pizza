import { Button } from "reactstrap";
import React from "react";
import "./Counter.css";

const Counter = ({ setCounter, counter }) => {
  const arti1 = () => {
    setCounter(counter + 1);
  };

  const eksi1 = () => {
    setCounter(counter - 1);
  };
  return (
    <div id="counter">
      <Button color="warning" onClick={eksi1}>
        -
      </Button>
      <p className="counter-number">{counter}</p>
      <Button color="warning" onClick={arti1}>
        +
      </Button>
    </div>
  );
};
export default Counter;
