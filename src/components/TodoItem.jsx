import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TodoItem() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  }, [])

  return (
    <div className="todoitem">
      <ul>
        {todos.map((todo, id) => {
          return (
            <div key={id}>
              <Link to ={`${todo}`}>todo item {todo} </Link>
            </div>
          
          )
        })}
      </ul>
      
    </div>
  )}