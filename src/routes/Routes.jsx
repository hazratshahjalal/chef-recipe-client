import { createBrowserRouter } from "react-router-dom";
import MainContent from "../layout/MainContent/MainContent";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContent></MainContent>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
]);

export default router;