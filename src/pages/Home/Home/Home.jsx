import Banner from "../Banner/Banner";
import BrandsContainer from "../BrandsContainer/BrandsContainer";
import CompanyShowcase from "../CompanyShowcase/CompanyShowcase";
import Location from "../Location/Location";
import VisitUs from "../VisitUs/VisitUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyShowcase></CompanyShowcase>
            <VisitUs></VisitUs>
            <BrandsContainer></BrandsContainer>
            <Location></Location>
        </div>
    );
};

export default Home;