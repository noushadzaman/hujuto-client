
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/FH1Lvm2/matt-antonioli-T-Zdgxz-PS5k-unsplash.jpg" className="w-full" />
                <div className="absolute hidden md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>

                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Unleash Your Dreams through us.</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Experience the epitome of luxury in every drive. At Elegant Auto Gallery, we curate a collection of the world is most opulent cars, blending sophistication.</p>
                    <div className="flex">
                        <a href="#slide3" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                        <a href="#slide2" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Latest Project</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/gRdJnNQ/tyler-clemmensen-d1-Jum1v-VLew-unsplash.jpg" className="w-full" />
                <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>
                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Redefining Performance and Precision</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Opulent Motors is your gateway to automotive extravagance. Discover a handpicked selection of high-end, luxurious cars that define refinement and prestige.</p>
                    <div className="flex">
                        <a href="#slide1" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                        <a href="#slide3" className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Latest Project</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/TcLMVfC/vinayak-sharma-vgv19wm8y-Q4-unsplash.jpg" className="w-full" />
                <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>
                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Discover Diverse Excellence.</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Luxury Auto Elegance offers a world of elite vehicles, meticulously chosen for their craftsmanship and advanced features.</p>
                    <div className="flex">
                        <a href="#slide2" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Discover More</a>
                        <a href="#slide1" className="py-1 btn btn-outline hover:bg-[#ccb89b] hover:border-0 text-[#ccb89b] border-[#ccb89b] rounded-[2px]">Latest Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;