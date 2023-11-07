import { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
const ToDo = ({ updateCurrentToDoTitle, handleToDosChange }) => {
  const [todos, setTodos] = useState([]);
  const [toDoText, seToDoText] = useState("");


  const handleInputChange = (event) => {
    seToDoText(event.target.value);
  };

  const addTodo = () => {
    if (toDoText.trim() === "") return;

    const _todos = [...todos];
    _todos.push({ value: toDoText, saved: true });
    setTodos(_todos);
    handleToDosChange(todos);
    seToDoText("");
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const onSelectElement = (index) => {
    const updatedToDo = [...todos];
    updatedToDo[index].saved = false;
    setTodos(updatedToDo);
  };

  const saveElement = (index) => {
    const updatedToDo = [...todos];
    updatedToDo[index].saved = true;
    setTodos(updatedToDo);
  };

  const handleOnChange = (event, index) => {
    const updatedToDo = [...todos];
    updatedToDo[index].value = event.target.value;
    setTodos(updatedToDo);
  };

  return (
    <div style={{ marginLeft: 20, zoom: 1.2 }}>
      <h2>{updateCurrentToDoTitle}</h2>
      <div style={{ marginTop: -20 }}>
        ----------------------------------------------------------------
      </div>
      <div>
        <button onClick={addTodo} style={{ width: "10%", textAlign: "left" }}>
          <i
            className="fa fa-plus"
            style={{ marginRight: 20, fontWeight: "normal", fontSize: 10 }}
          ></i>
          <a style={{ fontSize: 10 }}>Add New To Do</a>
        </button>
        <input
          type="text"
          style={{ fontSize: 10, padding: 4, marginLeft: 10, width: "20%" }}
          placeholder="write what you want to do.."
          value={toDoText}
          onChange={handleInputChange}
        />
      </div>
      <ul style={{ fontWeight: "bold", fontSize: 10, width: "60%" }}>
        {todos.map((todo, index) => (
          <li title="Double Click To edit" key={index}>
            <div
              onDoubleClick={() => {
                onSelectElement(index);
              }}
            >
              <button
                style={{ marginRight: 10 }}
                onClick={() => removeTodo(index)}
              >
                <i className="fa fa-trash" />
              </button>
              {todo.saved ? (
                todo.value
              ) : (
                <input
                  value={todo.value}
                  onChange={(e) => {
                    handleOnChange(e, index);
                  }}
                />
              )}
              {!todo.saved ? (
                <button
                  style={{ marginLeft: 10 }}
                  type="button"
                  onClick={() => saveElement(index)}
                >
                  Save
                </button>
              ) : null}
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
