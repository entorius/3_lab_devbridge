import React, {useState} from 'react';
import './AddTodoForm.styles.css';


function AddTodoForm(addTodo) {
  const [inputValue,setInputValue] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo.addTodo(inputValue);
  }

  return (
    <form className="add-todo-form">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          onChange={handleInputChange}
          value ={inputValue}
        />
        <button type="submit" className="add-todo-button" onClick={handleSubmit}>Add todo</button>
    </form>
  )
}

export default AddTodoForm;