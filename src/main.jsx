import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoDetails from '/src/components/TodoDetail.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
{
    path: "/",
    element:<App />,
    children: [
      {
        path: "/:id",
        element:<TodoDetails />
      },
    ]
    
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


/* 

const router = createBrowserRouter([
  {
      path: "/",
      element:<Root />,
      children: [
        {
          path: "/About",
          element:<About />
        },
      ]
  },
  ])



    children: [
      {
        path: "/todo/1",
        element:<TodoDetails />
      },
    ]
*/
