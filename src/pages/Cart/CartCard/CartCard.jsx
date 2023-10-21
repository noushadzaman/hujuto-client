import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartCard = ({ singleProduct, setMyProductsState, myProductsState }) => {
    const [allCartProducts, setAllCartProducts] = useState([]);

    const { imageUrl, name, price, } = singleProduct;

    useEffect(() => {
        fetch('http://localhost:5000/cartProduct')
            .then(res => res.json())
            .then(data => {
                setAllCartProducts(data);
            })
    }, [])

    const handleDelete = () => {
        const specificProduct = allCartProducts.find(product => product.name == name);
        fetch(`http://localhost:5000/cartProduct/${specificProduct._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myProductsState.filter(myProductState => myProductState.name !== name);
                setMyProductsState(remaining);
                toast.success('Product delete successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row border-[#d6cab8] items-center justify-center md:justify-between border p-1 rounded-[2px] md:gap-10 mb-[30px] w-[70%] mx-auto">
                <div className="md:flex items-center gap-10">
                    <img className="w-[100px] bg-[#d6cab8] rounded-[2px] p-3" src={imageUrl} alt="" />
                    <div>
                        <p className="text-[#5f5c5c] font-semibold">{name}</p>
                        <p className="text-[#d6cab8] font-semibold">{price}</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <Link>
                        <button className="w-full btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px] text-center">DETAILS</button>
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="flex gap-3 items-center btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]"
                    >Delete<AiOutlineDelete /></button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

CartCard.propTypes = {
    singleProduct: PropTypes.object,
    setMyProductsState: PropTypes.func,
    myProductsState: PropTypes.array,
}

export default CartCard;