import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../pages/Home";


const Routes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
            ]
        }
    ]);

    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Routes;