
const Footer = () => {
    return (
        <footer className="footer py-[100px] md:px-[100px] lg:px-[150px] xl:px-[200px] flex justify-between bg-[#0c1315] text-base-content">
            <nav>
                <p className="text-[#ccb89b] ml-3 text-3xl tracking-widest">HUJUTO</p>
                <a className="text-[#A6A6A6]">HOW WE WORK</a>
                <a className="text-[#A6A6A6]">FAQ</a>
                <a className="text-[#A6A6A6]">SERVICES</a>
                <a className="text-[#A6A6A6]">CONTACT</a>
                <p className="text-[#ccb89b] ml-3 tracking-wide">CALL CENTAR: +397 256 38 29</p>
            </nav>
            <nav>
                <header className="text-[white] ml-3 text-3xl">Quick links</header>
                <a className="text-[white]">About us</a>
                <a className="text-[white]">Contact</a>
                <a className="text-[white]">Jobs</a>
                <a className="text-[white]">Press kit</a>
            </nav>
            <nav>
                <header className="text-[white] ml-3 text-3xl">OUR SERVICES</header>
                <a className="text-[white]">CORPORATE TRAVELS</a>
                <a className="text-[white]">SPECIAL EVENTS</a>
                <a className="text-[white]">AIRPORT TRANSPORT</a>
                <a className="text-[white]">ETC TRANSPORT</a>
            </nav>
        </footer>
    );
};

export default Footer;