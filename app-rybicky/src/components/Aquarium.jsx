import React, { useState, useEffect } from "react";
import "./Aquarium.css";

const Aquarium = ({ smallFishes, bigFishes }) => {
  const [sirka, setSirka] = useState(0);
  const [delka, setDelka] = useState(0);
  const [vyska, setVyska] = useState(0);
  const [objemZadaneho, setObjemZadaneho] = useState(0);
  const minObjem = bigFishes * 20 + smallFishes * 10;

  //   přepočet při změně velikosti akvária
  const handleChange = (e) => {
    const source = e.target.name;

    switch (source) {
      case "sirka": {
        setSirka(e.target.value);

        break;
      }
      case "delka": {
        setDelka(e.target.value);
        break;
      }
      case "vyska": {
        setVyska(e.target.value);
        break;
      }
      default:
        break;
    }
    setObjemZadaneho((sirka * delka * vyska) / 1000);
  };

  const handleClick = () => {
    alert(
      "Schváleno. Akvárium je dostatečně velké na zadané množštví rybiček."
    );
  };

  const SetBtnActivation = () => {
    const btnSchvalit = document.querySelector(".btn-schvalit");
    const objemTemp = Math.round((sirka * vyska * delka) / 1000);
    setObjemZadaneho(objemTemp);

    if (sirka > 0 && delka > 0 && vyska > 0) {
      if (minObjem <= objemZadaneho) {
        btnSchvalit.style.backgroundColor = "green";
      } else {
        btnSchvalit.style.backgroundColor = "red";
      }
    }
  };

  useEffect(SetBtnActivation, [sirka, vyska, delka, objemZadaneho]);

  return (
    <div>
      <form>
        <h2>Akvárium</h2>
        <p>Objem akvária: {objemZadaneho} litrů</p>
        <p>Minimální objem pro zadaný počet rybiček: {minObjem} litrů</p>
        <p>počet malých rybiček: {bigFishes} ks</p>
        <p>počet velkých rybiček: {smallFishes} ks</p>
        <div className="aquarium-form" onChange={handleChange}>
          <input type="number" name="sirka" placeholder="šířka akvária (cm)" />
          <input type="number" name="delka" placeholder="délka akvária (cm)" />
          <input type="number" name="vyska" placeholder="výška akvária (cm)" />
          <br />
          <button className="btn-schvalit" onClick={handleClick} disabled>
            Schválit rozměry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Aquarium;
