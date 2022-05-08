import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  // to be used in the category filter function
  const [selectedCategory, setSelectedCategory]=useState("All")
  // to be used to create new tasks in new task form, and render them in Tasks.js. initial state is all the tasks in the data folder.
  const [tasks, setTasks]=useState(TASKS)
  // to be used to delete the completed tasks in Tasklist

  function handleDeleteTasks(event){
    let deleteTask = event.target.parentElement.children[1].textContent
    setTasks(tasks.filter(task => task.text !== deleteTask))
    // tasks.filter(task => task !== .target)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        setTasks={setTasks} 
        tasks={tasks} 
        TASKS={TASKS}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category!=="All")} 
        tasks={tasks} setTasks={setTasks} 
      />
      <TaskList 
        handleDeleteTasks = {handleDeleteTasks} 
        tasks={tasks} setTasks={setTasks} 
        categories={CATEGORIES} />
    </div>
  );
}

export default App;
