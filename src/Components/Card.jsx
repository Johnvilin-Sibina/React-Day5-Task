import React, { useState } from "react";

const Card = ({ element, deleteTodo, handleEdit }) => {
  //State to set name
  const [name, setName] = useState(element.name);

  //state to set description
  const [description, setDescription] = useState(element.description);

  const handleSave = () => {
    const editedTodo = { ...element, name, description };
    handleEdit(editedTodo);
  };
  return (
    <div key={element.id} className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <p className="card-text">
            <b>Name:</b> {element.name}
          </p>
          <p className="card-text">
            <b>Description:</b> {element.description}
          </p>
          <label htmlFor="status">
            <b>Status:</b>
          </label>
          <select id="status">
            <option value="notcompleted">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <div className="d-flex justify-content-around mt-4">
            <>
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${element.id}`}
              >
                Edit
              </button>
              <div
                className="modal fade"
                id={`exampleModal-${element.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Todo
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      ></input>
                      <br></br>
                      <label htmlFor="description">Description:</label>
                      <input
                        type="text"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      ></input>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(element.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
