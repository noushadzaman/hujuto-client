import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BrandDetail from "../pages/BrandDetail/BrandDetail";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart/Cart";
import Update from "../pages/Update/Update";
import Contact from "../pages/Contact/Contact";
import Car from "../pages/Car/Car";
import Order from "../pages/Order/Order";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/brandDetail/:id',
                element: <BrandDetail />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/cars',
                element: <Car />
            },
            {
                path: '/vehicle/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hujuto-server.vercel.app/vehicle/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>,
                loader: () => fetch('https://hujuto-server.vercel.app/cartProduct')
            },
            {
                path: '/cartProduct/:id',
                element: <PrivateRoute><Cart /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/cartProduct/${params.id}`)
            },
            {
                path: '/vehicleUpdate/:id',
                element: <PrivateRoute><Update /></PrivateRoute>
            },
            {
                path: '/order/:id',
                element: <PrivateRoute><Order /></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
        ]
    },
]);

export default router