import React from "react";
import "./List.css";

function List({ data, onDelete }) {
  return (
    <div>
      {data.map((fish) => {
        return (
          <div key={fish.id}>
            <li className="one-line">
              <span>
                {fish.name} - {fish.type}
              </span>
              <button onClick={() => onDelete(fish.id, fish.type)}>
                Smazat
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default List;
