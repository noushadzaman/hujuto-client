import AOS from 'aos';
AOS.init();
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const BrandProductsCard = ({ vehicle, index }) => {
    const { brandName, imageUrl, name, price, rating, type, shortDescription} = vehicle;

    return (
        <div data-aos="fade-up" className={`w-[65%] hover:bg-[#F7F5F2] rounded-[2xl] p-1 flex flex-col items-start justify-center gap-3 hover:shadow-2xl hover:shadow-[#ccb89b] transition-shadow
        ${index % 2 == 0 ? 'justify-self-start' : 'justify-self-end'}
        `}>
            <div className="rounded-2xl w-[100%]">
                <img src={imageUrl} alt="" />
            </div>
            <div className="w-full px-3 pb-4 space-y-1">
                <p className="text-[#5f5c5c] text-[22px] font-semibold tracking-wider">Model: {name}</p>
                <p className="text-[#d6cab8] text-[15px] font-semibold tracking-wider">{brandName}</p>
                <p className="text-[#ccb89b] text-[18px] font-semibold tracking-wider">Type:{type}</p>
                <p className="text-[#ccb89b] text-[18px] font-semibold tracking-wider">Rating: {rating}</p>
                <p className="text-[#ccb89b] text-[18px] font-semibold tracking-wider">{price}</p>
                <p className="text-[#ccb89b] text-[16px] pb-[15px] font-[600] tracking-wider">{shortDescription}.</p>
                <div className='flex gap-5'>
                    <button className="w-full btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]">Details</button>
                    <button className="w-full btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]">Update</button>
                </div>
            </div>
        </div>
    );
};

BrandProductsCard.propTypes = {
    index: PropTypes.number,
    vehicle: PropTypes.object,
}

export default BrandProductsCard;