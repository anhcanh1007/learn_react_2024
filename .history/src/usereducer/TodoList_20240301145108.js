import { useReducer } from "react";

// init state
const initState = {
  job: "",
  jobs: [],
};

// actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

// reducer
const reducer = (state, action) => {};

//dispatch
function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [job, jobs] = state;
  return (
    <div>
      <div>
        <input placeholder="enter code" value={job} />
        <button>Add</button>
      </div>
      <div>
      <ul>
        
      </ul>
        <li>
          quet nha <span>X</span>
        </li>
      </div>
    </div>
  );
}

export default TodoList;
