import React from 'react';

export default function Todo() {
  return (
    <div>
      <ul className="todo" id="todo">
        <li>
          rtjhr t jetdyj
          <div className="buttons">
            <button className="complete">
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button className="complete">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="remove">
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
