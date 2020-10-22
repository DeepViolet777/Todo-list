import React from 'react';
import ToDoList from './ToDo/ToDoList';
import './App.css';

function App() {

   const todos = [
      { id: 1, completed: false, title: 'Купить хлеб' },
      { id: 2, completed: false, title: 'Купить молоко' },
      { id: 3, completed: false, title: 'Купить масло' }
    


   ]

  function toggleTodo(id){
        console.log('todo id', id)
  }


  return (
    <div className="wrapper">
     <h1>Todo list</h1>
     <ToDoList todos={todos} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
