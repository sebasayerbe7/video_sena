import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
//ximport App from './App.jsx'
import './index.css'
import './App.css'
import Home from './routes/Home.jsx'
import Categorie from './routes/Categorie.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: '/Categorie',
    element: <Categorie/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
