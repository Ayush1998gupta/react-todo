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

  // PUT request
  async function editListsHandler(list) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${list.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(list),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await response.json();
      const index = lists.findIndex(p => {
        return p.id === data.id;
      });
      handleUpdate(index, data);
    } catch (error) {
      setError(error.message);
    }
  }

  const handleUpdate = (index, todo) => {
    const newTodos = [...lists];
    newTodos[index] = todo;
    setLists(newTodos);
  };

  // content for display the fetch items
  let content = <p>Found no Albums.</p>;

  if (lists.length > 0) {
    content = (
      <TodoList
        lists={lists}
        onDelete={deleteListHandler}
        onEdit={editListsHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoding) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      {/* Heading */}
      <h1>Todo App</h1>

      {/* component for adding the todo */}
      <AddTodos onAddLists={addListsHandler} />

      {/* for loding and fetching component */}
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
