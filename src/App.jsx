import React, { useState } from "react";
import "./index.css";
import Input from "./Components/Input";
import Filter from "./Components/Filter";
import Card from "./Components/Card";
const App = () => {
  const [todo, setTodo] = useState([]); //State to add todo
  const [name, setName] = useState(""); //State to set name
  const [description, setDescription] = useState(""); //state to set description

  //function to add a new todo
  const addTodo = (newName, newDescription) => {
    let data = {
      id: todo.length + 1,
      name: newName,
      description: newDescription,
      status: "Not Completed",
    };
    setTodo([...todo, data]);
  };

  const handleEdit = (editedTodo) => {
    const updatedTodo = todo.map((item) =>
      item.id === editedTodo.id ? editedTodo : item
    );
    setTodo(updatedTodo);
  };

  //function to delete a todo
  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };


  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1 className="mt-5 text-center title">My Todo</h1>
          <Input
            addTodo={addTodo}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
          />
          <Filter todo={todo} setTodo={setTodo} />
          <div className="row">
            {todo.map((element, index) => {
              return (
                <Card
                  key={element.id}
                  element={element}
                  deleteTodo={deleteTodo}
                  handleEdit={handleEdit}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
