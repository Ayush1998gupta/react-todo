import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
   const onDeleteHandler = (deleteAlbum) => {
     props.onDelete(deleteAlbum);
   };
  return (
    <section className="container2">
      {props.lists.map((list) => (
        <Todo
          key={list.id}
          title={list.title}
          id={list.id}
          userId={list.userId}
          completed={list.completed}
          onDelete={onDeleteHandler}
        />
      ))}
    </section>
  );
}
