// src/components/NewTodo.jsx

import { useState } from "react";

const NewTodo = (props) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addTodo(newTodo )
    };
    const [ newTodo, setNewTodo ] = useState('')
    
    
    const handleChange = (e) => {
        setNewTodo(e.target.value)
    
}

    return (
      <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">Todo: </label>
            <input
                id="todoInput"
                type="text"
                name="todo"
                value={newTodo}
               />
           
            <button type="submit">Create to-do</button>
      </form>
    );
  };
  
  export default NewTodo;
  