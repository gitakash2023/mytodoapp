import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();
  const onchangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onclickHandler = (e) => {
    // e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  console.log(todos);

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
              <button style={{ marginLeft: "20px" }} onClick={onclickHandler}>
                add todo
              </button>
            </div>
          </div>
          <div style={{}}>
            <ul>
              {todos.map((obj) => (
                <li
                  style={{
                    width: "400px",
                    backgroundColor: "blue",
                    marginTop: "20px",
                    padding: "20px",
                  }}
                >
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
