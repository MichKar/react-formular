import React from "react";
import "./Form.css";

const Form = ({ data, onAdd, onChange }) => {
  return (
    <div>
      <div>
        <form>
          <div className="form-new-fish">
            <h2>Formulář na přidání rybičky</h2>

            <input
              type="text"
              name="name"
              placeholder="Jméno"
              value={data.name}
              onChange={onChange}
            />
            <div onChange={onChange}>
              <label className="radio">
                <input type="radio" name="type" value="velká" />
                velká
              </label>

              <label className="radio">
                <input type="radio" name="type" value="malá" />
                malá
              </label>
            </div>

            <button onClick={onAdd}>Přidat rybičku</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
