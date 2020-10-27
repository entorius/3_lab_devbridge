import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

import './TodoItem.styles.css';

function TodoItem({todoItem,deleteItem}) {
  const[completed, setCompleted] = useState(false);
  const handleComplete = (e) => {
    e.preventDefault();
    setCompleted(true);
  }
  const handleRevert = (e) => {
    e.preventDefault();
    setCompleted(false);
  }
  const handleDelete = (e) => {
    e.preventDefault();
    setCompleted(false);
    deleteItem(todoItem);
  }
  return (
    <li key={todoItem.id} className = {`todo_item ${completed ? "completed" : ""}`}>
      <span>{todoItem.content}</span>
      <form className={`button_group`}>
        {completed && <button className={`button_revert`} onClick={handleRevert}>Revert</button>}
        {!completed && <button className={`button_complete`} onClick={handleComplete}>Complete</button>}
        <button className={`button_delete`} onClick={handleDelete}>Delete</button>
        {completed && <FontAwesomeIcon className={`complete_icon`}icon={faCheckCircle} />}
      </form>
    </li>
  )
}

export default TodoItem;