import { createBrowserRouter } from "react-router-dom";
import MainContent from "../layout/MainContent/MainContent";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

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
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
]);

export default router;