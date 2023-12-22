import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init({
    delay: 300,
    duration: 400, 
    once: false,
    throttleDelay: 500,
});

const BrandProductsCard = ({ vehicle, index }) => {
    const { _id, imageUrls, direction, name, price, rating, shortDescription } = vehicle;

    return (
        <div data-aos="fade-up" className={`w-[65%] hover:bg-[#F7F5F2] hover:shadow-[#ccb89b] rounded-[2xl] p-1 flex flex-col items-start justify-center gap-3 hover:shadow-2xl transition-shadow
        ${index % 2 == 0 ? 'justify-self-start' : 'justify-self-end'}
        `}>
            <div className="rounded-2xl w-[100%] flex items-center flex-col">
                <div className='absolute top-3'>
                    <p className="text-[#5f5c5c] text-[40px] lg:text-[50px] font-semibold tracking-wider px-3 text-center opacity-50 md:whitespace-nowrap">{name}</p>
                </div>
                <div data-aos={`fade-${direction}`} data-aos-duration="1000" className='relative'>
                    <img className='w-[60%] mx-auto py-[50px]' src={imageUrls[0]} alt="" />
                </div>
            </div>
            <div className="w-full px-3 pb-4 md:flex justify-between gap-3">
                <div className='space-y-1'>
                    <p className="text-[#ccb89b] text-[18px] font-semibold tracking-wider">Rating: {rating}</p>
                    <p className="text-[#ccb89b] text-[18px] font-semibold tracking-wider">{price}</p>
                    <p className="text-[#5f5c5c] opacity-75 text-[14px] pb-[15px] font-[600] tracking-wider">{shortDescription.slice(0, 70) + '...'}.</p>
                </div>
                <div className='md:w-[40%] shrink-0 flex gap-5 flex-col'>
                    <Link
                        to={`/vehicle/${_id}`}
                        className="w-full btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px] text-center">MORE DETAILS</Link>
                    <Link
                        to={`/vehicleUpdate/${_id}`}
                        className="w-full text-center btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]">Update</Link>
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