import Marquee from "react-fast-marquee";

const CompanyShowcase = () => {
    return (

        <div className="container mx-auto mt-[50px] mb-[50px]">
            <div className="py-[50px] image-container">
                <Marquee gradient={true} pauseOnHover={true}>
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/5BCvjrY/Mercedes-Benz-Logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/KLPhxwM/Lamborghini-logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/9v9rt9L/Chevrolet-logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/HnbYGwC/logo-Audi.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/K636Ggf/Rolls-Royce-Logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/nj54C2M/Bugatti-Logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/Jpky7Ly/nissan-logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/cyJkqwY/BMW-Logo.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/GJc5xBw/Mc-Laren-Logo-700x394.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/zGLmrMt/Lexus-L-go.png" alt="" />
                    <img className="w-[100px] md:w-[200px] mr-9" src="https://i.ibb.co/2k57n5Z/Jeep-logo.png" alt="" />
                </Marquee>
                <div className="overlay"></div>
            </div>
        </div>
    );
};

export default CompanyShowcase;