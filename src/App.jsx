import React, { useState } from "react";
import "./index.css";
import Input from "./Components/Input";
import Filter from "./Components/Filter";
import Card from "./Components/Card";

const App = () => {
   // State to add todo
  const [todos, setTodos] = useState([]);

   // State to store filtered todos
  const [filteredTodos, setFilteredTodos] = useState([]);

  // State to set name
  const [name, setName] = useState(""); 

  // State to set description
  const [description, setDescription] = useState(""); 

  // Function to add a new todo
  const addTodo = (newName, newDescription) => {
    let data = {
      id: todos.length + 1,
      name: newName,
      description: newDescription,
      status: "notcompleted",
    };
    const updatedTodos = [...todos, data];
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  // Function to handle editing a todo
  const handleEdit = (editedTodo) => {
    const updatedTodos = todos.map((item) =>
      item.id === editedTodo.id ? editedTodo : item
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  // Function to handle filtering todos
  const handleFilter = (status) => {
    if (status === "all") {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((item) =>
        status === "completed"
          ? item.status === "completed"
          : item.status === "notcompleted"
      );
      setFilteredTodos(filtered);
    }
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
          <Filter handleFilter={handleFilter} />
          <div className="row">
            {filteredTodos.map((element) => {
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

