import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const BrandCard = ({ brand }) => {
    const { _id, brandName, imageUrl, description } = brand;

    return (
        <div className={`relative max-w-[350px] h-[450px] bg-[#F7F5F2] flex items-center flex-col p-[20px] justify-self-center rounded-[2px] shadow-lg hover:shadow-[#ccb89b]`} data-aos="fade-up">
            <div className='min-h-[180px]'>
                <img className="my-auto" src={imageUrl} alt="" />
            </div>
            <h3 className="text-[#404040] text-[22px] font-semibold">{brandName}</h3>
            <p className="text-[#404040] text-center text-[16px] leading-7 py-[30px] font-[600]">{description}</p>
            <Link className='absolute bottom-3 w-[140px] h-[35px] md:w-[200px] md:h-[50px] text-center'
                to={`/brandDetail/${_id}`}
            >
                <button className='btn-primary w-[140px] h-[35px] md:w-[200px] md:h-[50px]'>MORE DETAILS</button>
            </Link>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandCard;