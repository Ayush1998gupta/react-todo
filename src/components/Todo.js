import React, { useState } from 'react';

export default function Todo(props) {
  const [isEditing, SetIsEditing] = useState(false);
  const [updateTitle, setUpdatedTitle] = useState('');
  const [taskcomplet, setTaskComplet] = useState(props.completed);

  const taskCompleted = (prev) => {
    setTaskComplet((prev) => !prev);
    console.log(taskcomplet);
  };

  const titleChangeHandler = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const editData = {
      userId: props.userId,
      id: props.id,
      title: updateTitle,
      completed: props.completed,
    };
    // console.log(editData);
    props.onEdit(editData);
    setUpdatedTitle('');
    SetIsEditing(false);
  };

  const editHandler = () => {
    SetIsEditing(true);
  };
  const stopEditingHandler = () => {
    SetIsEditing(false);
  };

  const deleteHandler = () => {
    const deleteAlbum = {
      id: props.id,
    };
    props.onDelete(deleteAlbum);
  };

  return (
    <React.Fragment>
      <li>
        {!isEditing ? (
          props.title
        ) : (
          <div className="edit">
            <input
              type="text"
              className="form__field"
              placeholder={props.title}
              name="title"
              id="title"
              onChange={titleChangeHandler}
            />
          </div>
        )}

        <div className="buttons">
          {!isEditing ? (
            <button className="complete" onClick={taskCompleted}>
              <i
                className={`${
                  !taskcomplet ? 'fa-regular' : 'fa-solid'
                } fa-circle-check`}
              ></i>
            </button>
          ) : (
            <button className="complete" onClick={submitHandler}>
              <i className="fa-regular fa-square-check"></i>
            </button>
          )}
          {isEditing ? (
            <button className=" complete editing" onClick={stopEditingHandler}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          ) : (
            <button className="complete" onClick={editHandler}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          )}
          <button className="remove" onClick={deleteHandler}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </React.Fragment>
  );
}
