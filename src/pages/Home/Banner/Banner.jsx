
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/FH1Lvm2/matt-antonioli-T-Zdgxz-PS5k-unsplash.jpg" className="w-full" />
                <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>
                <div className="h-full left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold mt-2 md:mt-16 xl:mt-[200px] ml-10">Unleash Your Dreams through us.</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Lamborghini is Dual Motor All-Wheel Drive delivers unparalleled range and breathtaking power for an unparalleled driving experience.</p>
                    <div className="flex">
                        <a href="#slide3" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                        <a href="#slide2" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] rounded-[2px]">Latest Project</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/gRdJnNQ/tyler-clemmensen-d1-Jum1v-VLew-unsplash.jpg" className="w-full" />
                <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>
                <div className="h-full left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold mt-2 md:mt-16 xl:mt-[200px] ml-10">Redefining Performance and Precision</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Experience Audi is Dual Motor All-Wheel Drive, offering unmatched range and exhilarating power for the ultimate driving adventure</p>
                    <div className="flex">
                        <a href="#slide1" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                        <a href="#slide3" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] rounded-[2px]">Latest Project</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/TcLMVfC/vinayak-sharma-vgv19wm8y-Q4-unsplash.jpg" className="w-full" />
                <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>
                <div className="h-full left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold mt-2 md:mt-16 xl:mt-[200px] ml-10">Discover Diverse Excellence.</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Discover our diverse collection of robust luxury cars, where sophistication meets performance and innovation reigns supreme.</p>
                    <div className="flex">
                        <a href="#slide2" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                        <a href="#slide1" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] rounded-[2px]">Latest Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;