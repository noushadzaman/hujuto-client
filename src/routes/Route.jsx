import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BrandDetail from "../pages/BrandDetail/BrandDetail";
import AddProduct from "../pages/AddProduct/AddProduct";

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
                path: '/brandDetail/:id',
                element: <BrandDetail></BrandDetail>,
                loader: ({ params }) => fetch(`http://localhost:5173/brandDetail/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
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