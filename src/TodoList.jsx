import React, { useRef, useEffect, useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'TODO': {
      return { ...state, todo: action.payload };
    }
    case 'TODOS': {
      if (state.todo.length > 3) {
        return { ...state, todos: [...state.todos, state.todo], todo: '' };
      }
    }
    case 'REMOVETODO': {
      const updatedTodo = state.todos.filter(
        (_, index) => index !== action.payload
      );
      return { ...state, todos: [...updatedTodo] };
    }
    case 'CLEARALL': {
      return { ...state, todos: [], todo: '' };
    }
    default:
      return state;
  }
}

const errorMsg = (
  <p
    style={{
      color: 'red',
      fontSize: '12px',
      fontStyle: 'italic',
      padding: '0',
      margin: '0',
      marginLeft: '-130px',
    }}
  >
    Please Enter More Than 3 Character
  </p>
);

const initialState = { todo: '', todos: [] };
function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'TODOS' });
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <input
          ref={inputRef}
          className="todo-box"
          type="text"
          placeholder="Enter Todo Task"
          onChange={(e) => dispatch({ type: 'TODO', payload: e.target.value })}
          value={state.todo}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          disabled={!state.todo.length}
          style={{
            marginLeft: '20px',
            backgroundColor: 'lightblue',
            color: 'red',
          }}
          onClick={() => dispatch({ type: 'TODOS' })}
        >
          Submit
        </button>
        <button onClick={() => dispatch({ type: 'CLEARALL' })}>
          Clear All
        </button>
      </div>
      {state.todo.length >= 3 ? '' : errorMsg}
      <ul>
        {state.todos?.map((ele, index) => (
          <>
            <div>
              <li key={index}>
                {ele}{' '}
                <span>
                  <button
                    style={{ padding: '0', margin: '0', marginLeft: '10px' }}
                    onClick={() =>
                      dispatch({ type: 'REMOVETODO', payload: index })
                    }
                  >
                    X
                  </button>
                </span>
              </li>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
