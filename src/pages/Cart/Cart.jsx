import { useState, useContext } from "react";
import CartCard from "./CartCard/CartCard";
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { ToastContainer } from 'react-toastify';


const Cart = () => {
    const axiosPublic = useAxios()
    const { user } = useContext(AuthContext);
    const [myProductsState, setMyProductsState] = useState([]);
    const userIdentity = user.email;

    const { data, isLoading } = useQuery({
        queryKey: ['cart', userIdentity],
        queryFn: async () => {
            const res = await axiosPublic(`/cartProduct?email=${userIdentity}`);
            setMyProductsState(res.data);
            return res;
        }
    })

    if (isLoading) {
        return <progress></progress>
    }

    return (
        <div>
            {
                myProductsState.length === 0 ?
                    <div className="flex justify-center pt-[250px] text-[25px] text-[#b09d80]">
                        <p>Nothing added to cart yet</p>
                    </div>
                    :
                    <div className="my-[150px] min-h-[10vh]">

                        {
                            myProductsState.map(singleProduct => <CartCard
                                key={singleProduct?._id}
                                singleProduct={singleProduct}
                                setMyProductsState={setMyProductsState}
                                myProductsState={myProductsState}
                            ></CartCard>)

                        }
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Cart;
