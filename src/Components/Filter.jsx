import React, { useState } from "react";

const Filter = ({ todo, setTodo }) => {
  const [filterValue, setFilterValue] = useState("all");
  //Function to filter
//    const handleFilter = (e) =>{
// setFilterValue(e.target.value)
// if(filterValue==="completed"){
//   var filteredTodos = todo.filter((item)=>item.status==="completed")
//   setTodo(filteredTodos);
// }
// else if(filterValue==="notcompleted"){
//   var filteredTodos = todo.filter((item)=>item.status==="notcompleted")
// }
// else if(filterValue==="all"){
//   var filteredTodos = todo
//   setTodo(filteredTodos)
// }
// }

const handleFilter = (e) => {
  const selectedValue = e.target.value;
  setFilterValue(selectedValue);

  let filteredTodos = [];
  if (selectedValue === "completed") {
    filteredTodos = todo.filter((item) => item.status === "completed");
  } else if (selectedValue === "notcompleted") {
    filteredTodos = todo.filter((item) => item.status === "notcompleted");
  } else {
    filteredTodos = todo; // All todos
  }

  // Update the todo state with filtered todos
  setTodo(filteredTodos);
};


  return (
    <>
      <div className="row">
        <div className="col d-flex justify-content-between mt-5 mb-5">
          <h2>My Todos</h2>
          <select name="filter" id="filter" value={filterValue} onChange={handleFilter}>
            <option value="all" className="all">
              All
            </option>
            <option value="completed" className="completed">
              Completed
            </option>
            <option value="notcompleted" className="notcompleted">
              Not Completed
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
