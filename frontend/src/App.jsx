import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import { Children } from "react";
import Home from "./components/Home";
import Project from "./components/Project";
import Template from "./components/Template";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children : [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/projects',
        element: <Project/>      
      },
      {
        path:'/templates',
        element: <Template/>
      }
    ]
  },
])


function App() {
  return <RouterProvider router={router}/>
}

export default App
