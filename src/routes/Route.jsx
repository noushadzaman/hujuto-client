import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
        ]
    },
]);

export default router