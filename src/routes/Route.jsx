import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BrandDetail from "../pages/BrandDetail/BrandDetail";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Faq from "../pages/Faq/Faq";

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
            {
                path: '/vehicle/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/vehicle/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
        ]
    },
]);

export default router