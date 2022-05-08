import React from "react";
import Task from "./Task";

function TaskList({tasks, categories, setTasks, handleDeleteTasks}) {
  return (
    <div className="tasks">
      {tasks.map(task => {
      return <Task handleDeleteTasks={handleDeleteTasks} task={task} categories={categories} setTasks={setTasks}/>
      })}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
