import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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