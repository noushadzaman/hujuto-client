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
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart/Cart";
import Update from "../pages/Update/Update";

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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/vehicle/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/vehicle/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/cartProduct')
            },
            {
                path: '/cartProduct/:id',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/cartProduct/${params.id}`)
            },
            {
                path: '/vehicleUpdate/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/vehicleUpdate/${params.id}`)
            },
        ]
    },
]);

export default router