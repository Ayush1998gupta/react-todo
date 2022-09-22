import { useState } from 'react';

export default function AddTodos(props) {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const list = {
      userId: 1,
      completed:false,
      title: enteredTitle,
    };
    props.onAddLists(list);
    setEnteredTitle('');
  }
  return (
    <form onSubmit={submitHandler}>
      <header className="container1">
        <input
          type="text"
          placeholder="Enter an activity..."
          id="item"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <button id="add" type="">
          <img
            src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
            alt=""
          />
        </button>
      </header>
    </form>
  );
}
