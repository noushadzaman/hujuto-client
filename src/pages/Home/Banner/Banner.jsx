import { Link } from "react-router-dom";

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

                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Global Auto Import Hub.</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Experience hassle-free international car importing with our expert team. From acquisition to delivery, we ensure a seamless process, making your dream car journey effortless and stress-free.</p>
                    <div className="flex">
                        <Link to='/cars' className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10 hover:text-[#ccb89b] hover:bg-[white]">Discover More</Link>
                        <Link to='/login' className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Explore Us</Link>
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
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Seamless Worldwide Car Imports</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Unlock the world of automotive possibilities with our comprehensive import services. Trust in our expertise for a secure and efficient process, ensuring your desired car arrives smoothly from anywhere globally.</p>
                    <div className="flex">
                        <Link to={'/cars'} className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10 hover:text-[#ccb89b] hover:bg-[white]">Discover More</Link>
                        <Link to='/login' className="py-1 btn btn-outline hover:bg-[#ccb89b] text-[#ccb89b] border-[#ccb89b] hover:border-0 rounded-[2px]">Explore Us</Link>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/TcLMVfC/vinayak-sharma-vgv19wm8y-Q4-unsplash.jpg" className="w-full" />
                <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                    <a href="#slide1" to='/login' className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                </div>
                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Drive Across Borders Today</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Navigate the global auto market effortlessly with our dedicated team. Our streamlined import solutions and expert guidance ensure a smooth journey for your dream car, from anywhere to your doorstep.</p>
                    <div className="flex">
                        <Link to={'/cars'} className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10 hover:text-[#ccb89b] hover:bg-[white]">Discover More</Link>
                        <Link to='/login' className="py-1 btn btn-outline hover:bg-[#ccb89b] hover:border-0 text-[#ccb89b] border-[#ccb89b] rounded-[2px]">Explore Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;