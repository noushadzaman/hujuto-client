import Banner from "../Banner";
import BrandsContainer from "../BrandsContainer";
import CompanyShowcase from "../CompanyShowcase";
import Faq from "../Faq";
import Location from "../Location";
import Popular from "../Popular";
import SuperCars from "../SuperCars";
import VisitUs from "../VisitUs";

const Home = () => {
    return (
        <>
            <Banner />
            <CompanyShowcase />
            <BrandsContainer />
            <Popular />
            <SuperCars />
            <VisitUs />
            <Faq />
            <Location />
        </>
    );
};

export default Home;