import React, { useState } from "react";
// In this component the new task entry form is served, with an event listener at the form level to accept the new task and its category input. this sets a new state for the task state, which triggers the App to re-rencer the tasklist.

function NewTaskForm({categories, tasks, setTasks}) {

  // Adding the following to  make it a contorlled component
  const [newTaskCategory, setNewTaskCategory]=useState("");
  const [newTaskDetail, setNewTaskDetail]= useState("");

  function handleNewTaskTextChange(event){
    setNewTaskDetail(event.target.value)
  }
  function handleNewTaskCategoryChange(event){
    console.log(event)
    setNewTaskCategory(event.target)
  }

    function onTaskFormSubmit(event){
      event.preventDefault();
      // create a new task object, and update the task state
      let newTask={
        text:event.target.text.value,
        category: event.target.category.value
      }
      setTasks([...tasks, newTask])

    }
  // const newCategories = categories.shift() - need help. i used this to remove the first item("All"), then used newCategories on line 34, but that didn't work.
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTaskTextChange} value={newTaskDetail} />
      </label>
      <label>
        Category
        {/* here looping through the categories and showing each item as a dropdown option */}
        <select name="category">
         {categories.map((category)=> (
            <option key={category} value={category} onChange={handleNewTaskCategoryChange}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
