import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';

const CartCard = ({ singleProduct }) => {
    const { imageUrl, name, price, _id } = singleProduct;

    // const handleDelete = (_id) => {
    //     console.log(_id);
    //     fetch(`http://localhost:5000/cartProduct/${_id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         });
    // }

    return (
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
                    onClick={() => handleDelete(_id)}
                    className="flex gap-3 items-center btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]"
                >Delete<AiOutlineDelete /></button>
            </div>

        </div>
    );
};

CartCard.propTypes = {
    singleProduct: PropTypes.object,
}

export default CartCard;