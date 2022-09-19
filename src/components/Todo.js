import React from 'react';

export default function Todo(props) {
  return (
    <React.Fragment>
      <ul className="todo" id="todo">
        <li>
          {props.title}

          <div className="buttons">
            <button className="complete">
              <i
                className={`${
                  !props.completed ? 'fa-regular' : 'fa-solid'
                } fa-circle-check`}
              ></i>
            </button>
            <button className="complete">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="remove">
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}
