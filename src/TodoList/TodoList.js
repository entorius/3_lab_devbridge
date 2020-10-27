import React from 'react';
import TodoItem from './../TodoItem/TodoItem'
import './TodoList.styles.css';

function TodoList({todos,deleteTodo}) {
  return (<ul className="todo-list">
    {todos.map((todoItem) => <TodoItem todoItem = {todoItem} deleteItem = {deleteTodo}/>
    )}
    </ul>)
}

export default TodoList;