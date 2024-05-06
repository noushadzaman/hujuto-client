import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom"


const SuperCars = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 5,
        },
    })
    const navigate = useNavigate();

    const axiosPublic = useAxios()
    const { data: vehicles, isLoading } = useQuery({
        // queryKey: ['ca'],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicle?size=5&type=${'Supercar'}`)
            return res;
        },
    });

    if (isLoading) {
        return
    }


    return (
        <>
            <h2 className="text-[26px] md:text-[42px] text-[#0C1315] mb-[15px] text-center uppercase lg:w-[60%] mx-auto">Super cars</h2>
            <p className="text-[14px] tracking-widest text-[#BFA37C] mb-[50px] text-center">Our most luxurious super cars</p>
            <div ref={sliderRef} className="keen-slider flex mb-[100px] gap-[50px]">
                {
                    vehicles?.data.map(vehicle => <div
                        className="keen-slider__slide number-slide1"
                        key={vehicle._id}>
                        <div className="rounded-2xl w-[80%] flex items-center flex-col">
                            <div className='absolute top-3'>
                                <p className="text-[#5f5c5c] text-[25px] lg:text-[40px] font-semibold tracking-wider text-center opacity-50 px-[60px]">{vehicle?.name}</p>
                            </div>
                            <div className='relative'>
                                <img className='w-[45%] md:w-[40%] mx-auto pt-[50px] pb-[30px]' src={vehicle?.imageUrls[0]} alt="" />
                                <div className="flex justify-between items-center px-[60px]">
                                    <p className="text-[#bfa37c] text-[15px] lg:text-[20px] font-semibold tracking-wider px-3  opacity-80">Total ordered: {vehicle?.orderedNumber}</p>
                                    <p
                                        onClick={() => navigate(`/vehicle/${vehicle._id}`)}
                                        className="text-[#bfa37c] text-[15px] lg:text-[20px] font-semibold tracking-wider px-3 cursor-pointer">
                                        <MdDoubleArrow />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default SuperCars;