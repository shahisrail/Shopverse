import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/HomePage/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      { path: "/", element: <Home /> },

    ]
  },
]);
export default router;