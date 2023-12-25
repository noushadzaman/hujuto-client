import { useParams } from "react-router-dom";
import BrandProducts from "../Brandproducts/BrandProducts";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const BrandDetail = () => {
    const axiosPublic = useAxios();
    const id = useParams();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");

    const { data, isLoading } = useQuery({
        queryKey: ['brand', id.id],
        queryFn: () => axiosPublic(`https://hujuto-server.vercel.app/brand/${id.id}`)
    })

    if (isLoading) {
        return <div className="mt-[200px] w-[150px] mx-auto">
            <MoonLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    const { sliderImage1, sliderImage2, sliderImage3, brandName, description } = data?.data;

    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full max-h-[800px]">
                    <img src={`${sliderImage1}`} className="w-full" />
                    <div className="absolute hidden md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#cbb79a] border-0">❯</a>
                    </div>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">{brandName}</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">{description}</p>
                        <div className="flex">
                            <a href="#slide3" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                            <a href="#slide2" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full max-h-[800px]">
                    <img src={`${sliderImage2}`} className="w-full" />
                    <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">{brandName}</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">{description}</p>
                        <div className="flex">
                            <a href="#slide1" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                            <a href="#slide3" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full max-h-[800px]">
                    <img src={`${sliderImage3}`} className="w-full" />
                    <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">{brandName}</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">{description}</p>
                        <div className="flex">
                            <a href="#slide2" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                            <a href="#slide1" className="py-1 btn btn-outline hover:bg-[#ccb89b] hover:border-0 text-[#ccb89b] border-[#ccb89b] rounded-[2px]">Latest Project</a>
                        </div>
                    </div>
                </div>
            </div>
            <BrandProducts
                brandName={brandName}
            ></BrandProducts>
        </div>
    );
};

export default BrandDetail;