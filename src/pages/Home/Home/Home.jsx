import Banner from "../Banner/Banner";
import BrandsContainer from "../BrandsContainer/BrandsContainer";
import CompanyShowcase from "../CompanyShowcase/CompanyShowcase";
import Faq from "../Faq/Faq";
import Location from "../Location/Location";
import VisitUs from "../VisitUs/VisitUs";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <CompanyShowcase></CompanyShowcase>
            <VisitUs></VisitUs>
            <BrandsContainer></BrandsContainer>
            <Faq></Faq>
            <Location></Location>
        </>
    );
};

export default Home;