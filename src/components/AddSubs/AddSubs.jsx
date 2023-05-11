import React, { useEffect, useState } from "react";
import "./AddSubs.css";
import Button from "../Button/Button";
const AddSubs = ({ count, setCount }) => {
  const increment = () => {
    if (count < 30) {
      count = count += 1;
      setCount(count);
    }
  };
  const decrement = () => {
    if (count > 0) {
      count = count -= 1;
      setCount(count);
    }
  };

  return (
    <div className="IncDec">
      <Button onClick={increment}>+</Button>
      <p>{count}</p>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};

export default AddSubs;
