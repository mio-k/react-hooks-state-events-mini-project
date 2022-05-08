import React from "react";
// in this component the category buttons are presented. since the selectedCategory state is set at the app level, when it happens it re-renders the tasklist when the state changes.

function CategoryFilter({categories, selectedCategory, setSelectedCategory, tasks, setTasks, TASKS}) {
  function handleButtonClick(event){
    console.log(event.target.innerText)
    let filteredTaskSet = TASKS.filter(task => task.category === event.target.innerText || event.target.innerText === "All")
    console.log(filteredTaskSet)
    setTasks(filteredTaskSet)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=> (
        <button key={category} name={category} onClick={handleButtonClick} className={category===selectedCategory ? "selected" : null}>{category}</button>
          )
        )
      }
    </div>
  );
}

export default CategoryFilter;
