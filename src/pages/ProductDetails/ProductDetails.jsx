import { useLoaderData } from "react-router-dom";
import './ProductDetails.css'

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { _id, brandName, imageUrl, name, price, rating, type, shortDescription } = productDetails;

    return (
        <div className="card mb-[150px]">
            <div className="card-details px-[10%]">
                <img src={imageUrl} alt="" />
                <div className="px-[10%] py-[50px]">
                    <p className="text-title">{name}</p>
                    <p className="text-body">{shortDescription}</p>
                    <p className="text-body">Rating: {rating}</p>
                    <p className="text-body">Price: {price}</p>
                </div>
            </div>
            <button className="card-button">Add to cart</button>
        </div>
    );
};

export default ProductDetails;
