
const VisitUs = () => {
    return (
        <div className="hero h-[550px] lg:h-[700px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/R35zqMH/albert-vincent-wu-6fvtsyw-ZScg-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content">
                <div className="absolute max-w-lg flex flex-col items-end top-0 right-1/4">
                    <h1 className="mt-[150px] text-white text-[20px] md:text-3xl lg:text-7xl text-right lg:mt-[200px] ml-10 mb-5 tracking-wider">Wanna get a beast instead just a car?</h1>
                    <button className="btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px]">Visit Us</button>
                </div>
            </div>
        </div>
    );
};

export default VisitUs;