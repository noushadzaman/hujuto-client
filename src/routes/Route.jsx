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
                element: <BrandDetail></BrandDetail>
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
                path: '/cars',
                element: <Car></Car>
            },
            {
                path: '/vehicle/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/vehicle/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/cartProduct')
            },
            {
                path: '/cartProduct/:id',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/cartProduct/${params.id}`)
            },
            {
                path: '/vehicleUpdate/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
        ]
    },
]);

export default router