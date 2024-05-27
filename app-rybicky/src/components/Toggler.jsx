import React from "react";
import "./Toggler.css";

const Toggler = ({ activeBtn }) => {
  const handleToggler = (e) => {
    activeBtn(e.target.name);
  };

  return (
    <div className="togglers">
      <button onClick={handleToggler} name="rybicky">
        Rybičky
      </button>
      <button onClick={handleToggler} name="akvarium">
        Akvárium
      </button>
    </div>
  );
};

export default Toggler;
