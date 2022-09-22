import Todo from './Todo';

export default function TodoList(props) {
  const onEditHAndler = (enteredEdit) => {
    props.onEdit(enteredEdit);
  };

  const onDeleteHandler = (deleteAlbum) => {
    props.onDelete(deleteAlbum);
  };
  return (
    <section className="container2">
      <ul className="todo" id="todo">
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
