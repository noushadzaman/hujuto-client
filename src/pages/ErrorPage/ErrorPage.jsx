import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center">
            <img className="w-[40%]" src="404 error with portals-bro.png" alt="" />
            <Link><button className="btn-primary px-[12px] py-[6px] md:px-[40px] md:py-[17px] ">Go home</button></Link>
        </div>
    );
};

export default ErrorPage;