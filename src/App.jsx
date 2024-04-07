import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import {Outlet} from 'react-router-dom'


function App() {
  

  return (
    <div>
      <h1 className="App">Todo List</h1>
      <TodoItem/> 
      <Outlet />
    </div>
    
  )
}

export default App