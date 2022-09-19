export default function AddTodos() {
  return (
    <form>
      <h3 className="left-item"> No Tasks</h3>
      <header className="container1">
        <input type="text" placeholder="Enter an activity..." id="item" />
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
