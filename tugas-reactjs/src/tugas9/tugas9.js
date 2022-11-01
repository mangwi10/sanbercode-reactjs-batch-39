import React from "react";
import { useState } from "react";
import "./tugas9.css";

const Tugas9 = () => {
  let [number, setNumber] = useState(1);

  const handleAmount = () => {
    setNumber(number++);
  };

  return (
    <div class="container">
      <div class="number-center">
        <p>{number}</p>
      </div>
      <button onClick={handleAmount}>TAMBAH</button>
      {number >= 10 ? <p>State count sudah lebih dari 10!!</p> : <p></p>}
    </div>
  );
};

export default Tugas9;
