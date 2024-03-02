// init state
const initState = {
  job: "",
  jobs: [],
};

// actions


function TodoList() {
  return (
    <div>
      <div>
        <input placeholder="enter code" />
        <button>Add</button>
      </div>
      <div>
        <li>
          quet nha <span>X</span>
        </li>
      </div>
    </div>
  );
}

export default TodoList;
