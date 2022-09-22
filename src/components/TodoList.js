import Todo from './Todo';

export default function TodoList(props) {
  // passing the data to app.js
  const onEditHAndler = (enteredEdit) => {
    props.onEdit(enteredEdit);
  };
  // passing the data to app.js
  const onDeleteHandler = (deleteAlbum) => {
    props.onDelete(deleteAlbum);
  };

  return (
    <section className="container2">
      <ul className="todo" id="todo">
        {/* mapping the todo list */}
        {props.lists.map((list) => (
          <Todo
            key={list.id}
            title={list.title}
            id={list.id}
            userId={list.userId}
            completed={list.completed}
            onEdit={onEditHAndler}
            onDelete={onDeleteHandler}
          />
        ))}
      </ul>
    </section>
  );
}
