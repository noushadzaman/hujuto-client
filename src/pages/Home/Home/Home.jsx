import Banner from "../Banner/Banner";
import CompanyShowcase from "../CompanyShowcase/CompanyShowcase";
import Location from "../Location/Location";
import VisitUs from "../VisitUs/VisitUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyShowcase></CompanyShowcase>
            <VisitUs></VisitUs>
            <Location></Location>
        </div>
    );
};

export default Home;