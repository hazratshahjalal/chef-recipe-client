import { createBrowserRouter } from "react-router-dom";
import MainContent from "../layout/MainContent/MainContent";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Recipes from "../components/Chefs/Recipes";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContent></MainContent>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`https://chef-recipe-server-wheat.vercel.app/chefs`)

      },
      {
        path: '/recipes/:id',
        element: <Recipes></Recipes>,
        loader: ({ params }) => fetch(`https://chef-recipe-server-wheat.vercel.app/recipes${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
]);

export default router;