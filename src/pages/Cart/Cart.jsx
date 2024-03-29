import { useState, useContext } from "react";
import CartCard from "./CartCard/CartCard";
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import MoonLoader from "react-spinners/MoonLoader";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Cart = () => {
    const axiosSecure = useAxiosSecure();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");
    const { user } = useContext(AuthContext);
    const [myProductsState, setMyProductsState] = useState([]);
    const userIdentity = user.email;

    const { refetch, data, isLoading } = useQuery({
        queryKey: ['cart', userIdentity],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartProduct?email=${userIdentity}`);
            setMyProductsState(res.data);
            return res;
        }
    })

    if (isLoading) {
        <MoonLoader
            color={color}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    }

    return (
        <div>
            {
                !isLoading && myProductsState.length === 0 ?
                    <div className="flex justify-center pt-[190px] items-center text-[25px] text-[#b09d80]">
                        <p>Nothing added to cart yet</p>
                    </div>
                    :
                    <div className="pt-[150px]">
                        {
                            myProductsState.map(singleProduct => <CartCard
                                key={singleProduct?._id}
                                singleProduct={singleProduct}
                                refetch={refetch}
                            ></CartCard>)

                        }
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Cart;
