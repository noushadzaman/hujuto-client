import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProducts from "./Brandproducts/BrandProducts";

const BrandDetail = () => {
    const [brand, setBrand] = useState([]);
    const id = useParams();

    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => {
                const brand = data.find(brand => brand._id == id.id);
                setBrand(brand);
            })
    }, [id.id]);

    const { sliderImage1, sliderImage2, sliderImage3, brandName, description } = brand;

    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={`${sliderImage1}`} className="w-full" />
                    <div className="absolute hidden md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#cbb79a] border-0">❯</a>
                    </div>
                    <div className="h-full left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold mt-2 md:mt-16 lg:mt-[150px] xl:mt-[350px] ml-10">{brandName}</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">{description}</p>
                        <div className="flex">
                            <a href="#slide3" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                            <a href="#slide2" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={`${sliderImage2}`} className="w-full" />
                    <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>
                    <div className="h-full left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold mt-2 md:mt-16 lg:mt-[150px] xl:mt-[350px] ml-10">{brandName}</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">{description}</p>
                        <div className="flex">
                            <a href="#slide1" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                            <a href="#slide3" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={`${sliderImage3}`} className="w-full" />
                    <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>
                    <div className="h-full left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold mt-2 md:mt-16 lg:mt-[150px] xl:mt-[350px] ml-10">{brandName}</h2>
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