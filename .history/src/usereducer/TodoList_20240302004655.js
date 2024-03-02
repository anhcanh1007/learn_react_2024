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

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// reducer
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = { ...state };
    default:
      throw new Error("invalid action");
  }

  return newState;
};

//dispatch
function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  console.log(state);
  return (
    <div>
      <div>
        <input
          placeholder="enter code"
          value={job}
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button>Add</button>
      </div>
      <div>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
