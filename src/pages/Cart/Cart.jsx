import { useState, useContext } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard/CartCard";
import { AuthContext } from '../../provider/AuthProvider';




const Cart = () => {
    const { user } = useContext(AuthContext);
    const userIdentity = user.email;
    const cartProducts = useLoaderData();
    const myCart = cartProducts.filter(myCartProduct => myCartProduct.userEmail == userIdentity);
    const [allProducts, setAllProducts] = useState([]);
    const [myProductsState, setMyProductsState] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/vehicle')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        if (!loading) {
            let myProducts = [];
            for (let i = 0; i < myCart.length; i++) {
                const singleMyCart = myCart[i];
                const myProduct = allProducts.find(product => product?.name == singleMyCart?.name);
                myProducts.push(myProduct)
            }
            setMyProductsState(myProducts);
        }
    }, [allProducts])

    return (
        <div className="my-[150px] min-h-[20vh]">

            {
                myProductsState.map(singleProduct => <CartCard
                    key={singleProduct?._id}
                    singleProduct={singleProduct}
                    setMyProductsState={setMyProductsState}
                    myProductsState={myProductsState}
                ></CartCard>)

            }
        </div>
    );
};

export default Cart;