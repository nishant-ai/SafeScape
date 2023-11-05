import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Community from "../pages/Community";
import Demo from "../pages/Demo";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/community",
          element: <Community />,
        },
        {
            path:"/demo",
            element:<Demo/>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
