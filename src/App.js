import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();
  const [binTodos, setBinTodos] = useState([]);
  const onchangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onsubmitHandler = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    // Created a copy of the todos array
    const updatedTodos = [...todos];
    // Removed the todo at the specified index
    const deletedTodo = updatedTodos.splice(index, 1);
    // Updated the state with the new array
    setTodos(updatedTodos);
    setBinTodos([...binTodos, deletedTodo]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div>
            <h1>Todo App</h1>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="text"
                placeholder="enter your todo"
                value={input}
                onChange={onchangeHandler}
              />
            </div>
            <div>
              <button style={{ marginLeft: "20px" }} onClick={onsubmitHandler}>
                add todo
              </button>
            </div>
          </div>
          <div style={{}}>
            <ul>
              {todos.map((obj) => (
                <li
                  style={{
                    maxWidth: "400px",

                    marginTop: "10px",
                  }}
                >
                  {obj}
                  <button onClick={deleteTodo} style={{ marginLeft: "5px" }}>
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <h1>Deleted Todos list</h1>
            </div>
            <div>
              <ul>
                {binTodos.map((obj) => (
                  <li>{obj}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
