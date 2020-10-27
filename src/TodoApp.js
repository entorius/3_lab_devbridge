import React, { useState } from 'react';
import initialTodos from './initialTodos';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import './TodoApp.styles.css';
import { v4 as uuidv4 } from 'uuid';
function TodoApp() {
  const[todos, setTodos] = useState(initialTodos)
  const handleAddTodo = (todoContent) => {
    const newTodo = {
      id: uuidv4(),
      content: todoContent,
      completed: false
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }
  const handleDeleteTodo = (todo) => {
    const getTodoIndex = todos.findIndex(searchTodo => {return searchTodo.id === todo.id});
    var todoList = [...todos];
    todoList.splice(getTodoIndex, 1)
    setTodos(todoList);
  }
  return (
    <div>
      <Header />
      <main className="content-wrapper"> 
        <TodoList todos = {todos} deleteTodo = {handleDeleteTodo}/>
        <AddTodoForm addTodo = {handleAddTodo}/>
      </main>
    </div>
  );
}

export default TodoApp;
