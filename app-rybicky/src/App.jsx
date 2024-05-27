import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Toggler from "./components/Toggler";
import Aquarium from "./components/Aquarium";

let big = 1;
let small = 1;

function App() {
  // původní pole rybiček
  const [fishes, setFishes] = useState([
    {
      id: 1,
      name: "Zlatonka",
      type: "velká",
    },
    {
      id: 2,
      name: "Bojovnice",
      type: "malá",
    },
  ]);

  // nová rybička
  const [newFish, setNewFish] = useState({
    id:
      fishes.length > 0
        ? Math.max(...fishes.map((oneFish) => oneFish.id)) + 1
        : 1,
    name: "",
    type: "",
  });

  // aktivní tlačítko
  const [active, setActive] = useState("rybicky");

  // zachycení změn ve formuláři
  const handleChange = (e) => {
    const updatedFish = {
      ...newFish,
      [e.target.name]: e.target.value,
    };
    setNewFish(updatedFish);
  };

  // přidání nové rybičky z formuláře do seznamu
  const handleAdd = (e) => {
    e.preventDefault();

    if (newFish.name && newFish.type) {
      setFishes((fishes) => {
        return [...fishes, newFish];
      });

      if (newFish.type === "velká") {
        big += 1;
      } else {
        small += 1;
      }

      // vynulování hodnot ve formuláři
      setNewFish({
        id: newFish.id + 1,
        name: "",
      });
      const radio = document.querySelectorAll("input[type='radio']");
      for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
      }
    } else {
      alert("Vyplňte všechna pole.");
    }
  };

  // vymazaní rybičky ze seznamu
  const handleDelete = (idToDelete, typeToDelete) => {
    if (typeToDelete === "velká") {
      big -= 1;
    } else {
      small -= 1;
    }
    setFishes(fishes.filter((fish) => fish.id !== idToDelete));
  };

  // změna kliknu na horní tlačítka
  const handleChoose = (source) => {
    setActive(source);
  };

  return (
    <div className="container">
      <Toggler activeBtn={handleChoose} />

      {active === "rybicky" && (
        <>
          <List data={fishes} onDelete={handleDelete} />
          <Form data={newFish} onChange={handleChange} onAdd={handleAdd} />
        </>
      )}

      {active === "akvarium" && (
        <>
          <Aquarium smallFishes={small} bigFishes={big} />
        </>
      )}
    </div>
  );
}

export default App;
