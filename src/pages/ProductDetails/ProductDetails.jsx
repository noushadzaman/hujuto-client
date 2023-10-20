import { useLoaderData } from "react-router-dom";
import './ProductDetails.css'

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {  imageUrl, name, price, rating, shortDescription } = productDetails;

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
            <button className="card-button">Add to cart</button>
        </div>
    );
};

export default ProductDetails;
