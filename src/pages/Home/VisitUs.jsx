import { Link } from 'react-router-dom'

const VisitUs = () => {

    return (
        <div  className="h-[500px] flex flex-col justify-center left-0 top-0 space-y-3 md:space-y-5 w-full items-end lg:pr-[60px] pr-[30px] md:pr-[50px] bg-[url('https://i.ibb.co/R35zqMH/albert-vincent-wu-6fvtsyw-ZScg-unsplash.jpg')] bg-cover">
            <h2 className="text-white text-[20px] md:text-3xl lg:text-6xl text-right mb-4 tracking-wider font-semibold">Global Auto Import Hub.</h2>
            <p className="text-white text-[12px] md:text-xl ml-10 text-right w-1/2">Experience hassle-free international car importing with our expert team. From acquisition to delivery, we ensure a seamless process, making your dream car journey effortless and stress-free.</p>
            <div className="flex">
                <Link to={`/contact`} className="btn-primary w-[140px] h-[35px] md:w-[200px] md:h-[50px] text-center pt-[7px] md:p-[15px]">Visit Us</Link>
            </div>
        </div>
    );
};

export default VisitUs;