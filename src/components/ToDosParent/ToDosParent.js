import { useState } from "react";
import ToDo from "../ToDo/ToDo.js";

const ToDosParent = () => {
  const [listOfToDos, setListOfToDos] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");
  const [selectedToDo, setSelectedToDo] = useState({});
  const [listOfSelectedToDosItems, setListOfSelectedToDosItems] = useState([]);

  const addNewToDo = () => {
    if (newListTitle.trim() === "") return;

    setListOfToDos([
      ...listOfToDos,
      {
        title: newListTitle,
        ToDo: (
          <ToDo
            updateCurrentToDoTitle={newListTitle}
            handleToDosChange={handleChildChange}
          />
        ),
      },
    ]);
    setNewListTitle("");
  };

  const handleChildChange = (newState) => {
    setListOfSelectedToDosItems(newState);
  };

  const handleListTitleValueChange = (event) => {
    setNewListTitle(event.target.value);
  };

  const onSelectToDo = (index) => {
    const updatedList = [...listOfToDos];
    setSelectedToDo(updatedList[index]);
    selectedToDo.todo = listOfSelectedToDosItems;
    setListOfToDos(updatedList);
  };

  return (
    <div style={{ zoom: 1.3 }}>
      <input value={newListTitle} onChange={handleListTitleValueChange} />
      <button type="button" onClick={addNewToDo}>
        Add New To Do
      </button>
      <br />
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {listOfToDos.map((todo, index) => (
          <li
            style={{ marginLeft: 60 }}
            title="Double Click To edit"
            key={index}
          >
            <button
              onClick={() => {
                onSelectToDo(index);
              }}
            >
              {todo.title}
            </button>
          </li>
        ))}
      </ul>
      {selectedToDo.ToDo}
    </div>
  );
};

export default ToDosParent;
