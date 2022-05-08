import React from "react";

function Task({task, setTasks, categories, handleDeleteTasks}) {

  function handleDeleteClick(event){
    handleDeleteTasks(event)
  }

  return (
    <div className="task" key={task.text}>
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
    )
}

export default Task;
