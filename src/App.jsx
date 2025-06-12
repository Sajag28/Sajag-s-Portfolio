import { useState } from 'react'
import './styles.css'
import Navbar from './components/Navbar.jsx'
import MainPage from './components/Mainpage.jsx'
import Bottomcards from './components/Bottomcards.jsx'
import Languages from './components/Languages.jsx'
import Lang from './components/Lang.jsx'
import Reach from './components/Reach.jsx'
import Three from './components/Three.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './components/Homepage.jsx';
import Test from './components/Test.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Projects.jsx';
function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/Education',
        element:<Education/>
      },
      {
        path:'/Experience',
        element:<Experience/>
      },{
        path:'/Projects',
        element:<Project/>
      }
    ]
  )
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
