import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const BrandProductsCard = ({ vehicle, index }) => {
    AOS.init({
        delay: 600,
        duration: 600,
        once: false,
    });
    const { _id, imageUrls, direction, name, price, rating, shortDescription } = vehicle;
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxios();
    const email = user?.email;

    const { data, isLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: () => axiosPublic(`/user?email=${email}`)
    })

    if (isLoading) {
        return <progress></progress>
    }
    const role = data?.data[0]?.role;

    return (
        <div data-aos="fade-up" className={`w-[65%] my-[20px] hover:bg-[#F7F5F2] hover:shadow-[#ccb89b] rounded-[2xl] p-1 flex flex-col items-start justify-center gap-3 hover:shadow-2xl transition-shadow justify-self-center
        ${index % 2 == 0 ? 'md:justify-self-start' : 'md:justify-self-end'}
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
                <div className='md:w-[40%] justify-end shrink-0 flex gap-5 flex-col'>
                    {
                        role === 'admin' &&
                        <Link
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                            to={`/vehicleUpdate/${_id}`}
                            className="w-full text-center btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]"
                        >Update</Link>
                    }
                    <Link
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        to={`/vehicle/${_id}`}
                        className="w-full btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px] text-center"
                    >MORE DETAILS</Link>
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