import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import MoonLoader from "react-spinners/MoonLoader";
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CartCard = ({ singleProduct, refetch }) => {
    const axiosPublic = useAxios();
    const axiosSecure = useAxiosSecure();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");
    const { productId, _id } = singleProduct;

    const { data, isLoading } = useQuery({
        queryKey: ['cart-product', productId],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicle/${productId}`);
            return res
        }
    })

    if (isLoading) {
        return (
            <div className='flex justify-center'>
                <MoonLoader
                    color={color}
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    }
    const { imageUrls, name, price, _id: id } = data?.data;

    const handleDelete = () => {
        axiosSecure.delete(`/cartProduct/${_id}`)
            .then(res => {
                console.log(res);
                refetch()
                toast.success('Product deleted successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <div className="flex flex-col md:flex-row border-[#d6cab8] items-center justify-center md:justify-between border p-1 rounded-[2px] md:gap-10 mb-[30px] w-[75%] mx-auto">
            <div className="flex items-center md:gap-10 justify-center flex-col md:flex-row">
                {
                    imageUrls && <img className="w-[100px] bg-[#d6cab8] rounded-[2px] p-3" src={imageUrls[0]} alt="" />
                }
                <div>
                    <p className="text-[#5f5c5c] font-semibold">{name}</p>
                    <p className="text-[#d6cab8] font-semibold">$ {price}</p>
                </div>
            </div>
            <div className='flex gap-5 items-center justify-center'>
                <Link
                    to={`/vehicle/${productId}`}
                >
                    <button className="w-[120px] md:w-[140px] btn-primary h-[35px] md:h-[40px] text-center">DETAILS</button>
                </Link>
                <button
                    onClick={handleDelete}
                    className="flex gap-3 items-center btn-primary w-[120px] md:w-[140px] h-[35px] md:h-[40px] justify-center md:mr-2"
                >Delete<AiOutlineDelete className='text-[20px]' /></button>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    singleProduct: PropTypes.object,
    setMyProductsState: PropTypes.func,
    myProductsState: PropTypes.array,
}

export default CartCard;