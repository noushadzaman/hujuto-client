import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from "react-router-dom";
import './ProductDetails.css'
import { useContext } from "react";
import { AuthContext } from '../../provider/AuthProvider';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { imageUrl, name, price, rating, shortDescription } = productDetails;
    const { user } = useContext(AuthContext);

    const handleAddToCart = () => {
        const userEmail = user.email;
        const cartProduct = { userEmail, name };
        fetch('https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/cartProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            toast.success('Item added to cart successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
    }

    return (
        <div className="detailCard mb-[150px]">
            <div className="card-details px-[10%] lg">
                <img className="lg:px-[10%] xl:px-[20%]" src={imageUrl} alt="" />
                <div className="px-[10%] py-[50px]">
                    <p className="text-title">{name}</p>
                    <p className="text-body">{shortDescription}</p>
                    <p className="text-body">Rating: {rating}</p>
                    <p className="text-body">Price: {price}</p>
                </div>
            </div>
            <button
                onClick={() => handleAddToCart(name)}
                className="card-button"
            >Add to cart</button>
             <ToastContainer />
        </div>
    );
};

export default ProductDetails;
