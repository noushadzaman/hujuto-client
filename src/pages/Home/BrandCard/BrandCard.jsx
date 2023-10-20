import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const BrandCard = ({ brand }) => {
    const { _id, brandName, imageUrl, description } = brand;

    return (
        <div className={`relative max-w-[350px] h-[450px] bg-[#F7F5F2] flex items-center flex-col p-[20px] justify-self-center rounded-[2px] shadow-lg`} data-aos="fade-up">
            <img className="max-w-[300px] " src={imageUrl} alt="" />
            <h3 className="text-[#404040] text-[22px] font-semibold">{brandName}</h3>
            <p className="text-[#404040] text-center text-[16px] leading-7 py-[30px] font-[600]">{description}</p>
            <Link
                to={`/brandDetail/${_id}`}
                className="absolute btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px] shrink-0 bottom-3" >
                MORE DETAILS
            </Link>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandCard;