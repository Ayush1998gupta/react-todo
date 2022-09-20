import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';

function App() {
  const [lists, setLists] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  // GET request
  const fetchsetListsHandler = useCallback(async () => {
    setIsLoding(true);
    setError(null);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const transformedLists = data.map((ListsData) => {
        return {
          id: ListsData.id,
          title: ListsData.title,
          userId: ListsData.userId,
          completed: ListsData.completed,
        };
      });
      setLists(transformedLists);
    } catch (error) {
      setError(error.message);
    }
    setIsLoding(false);
  }, []);

  useEffect(() => {
    fetchsetListsHandler();
  }, [fetchsetListsHandler]);

  // DELETE request
  const deleteListHandler = (list) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${list.id}`, {
      method: 'DELETE',
    });
    setLists(lists.filter((item) => item.id !== list.id));
  };

  // POST request
  async function addListsHandler(list) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          body: JSON.stringify(list),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await response.json();
      setLists((prevList) => {
        return [data, ...prevList];
      });
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no Albums.</p>;

  if (lists.length > 0) {
    content = <TodoList lists={lists} onDelete={deleteListHandler} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoding) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <AddTodos onAddLists={addListsHandler} />
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
