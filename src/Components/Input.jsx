import React from "react";
import "../index.css";

const Input = ({ addTodo, name, setName, description, setDescription }) => {

  //Function to add todo
  const handleSubmit = () => {
    addTodo(name, description);
    setName("");
    setDescription("");
  };
  return (
    <>
      <div className="row mt-4 d-flex justify-content-between">
        <div className="col-md-4 mb-4">
          <input
            type="text"
            placeholder="Todo Name"
            className="input"
            id="todoName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-md-4 mb-4">
          <input
            type="text"
            placeholder="Todo Descrpition"
            value={description}
            className="input"
            id="todoDescription"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="col-md-2 mb-4">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Add Todo
          </button>
        </div>
        <hr className="divider"/>
      </div>
    </>
  );
};

export default Input;
