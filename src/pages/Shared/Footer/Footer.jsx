import logo from '../../../../public/logo2.png'

const Footer = () => {
    return (
        <footer className="bottom-0">
            <div className="footer items-center py-[100px] md:px-[100px] lg:px-[150px] xl:px-[200px] flex justify-between flex-col md:flex-row bg-[#0c1315] text-base-content">
                <nav className="flex flex-col items-start">
                    <img className="h-[25px] mb-[20px]" src={logo} alt="" />
                    <p className="text-[#A6A6A6]">HOW WE WORK</p>
                    <p className="text-[#A6A6A6]">FAQ</p>
                    <p className="text-[#A6A6A6]">SERVICES</p>
                    <p className="text-[#A6A6A6]">CONTACT</p>
                    <p className="text-[#ccb89b] tracking-wide">CALL CENTAR: +397 256 39 29</p>
                </nav>
                <nav className="flex flex-col items-center">
                    <header className="text-[white] text-3xl">Quick links</header>
                    <p className="text-[white]">About us</p>
                    <p className="text-[white]">Contact</p>
                    <p className="text-[white]">Jobs</p>
                    <p className="text-[white]">Press kit</p>
                </nav>
                <nav className="flex flex-col items-start">
                    <header className="text-[white] text-3xl">OUR SERVICES</header>
                    <p className="text-[white]">CORPORATE TRAVELS</p>
                    <p className="text-[white]">SPECIAL EVENTS</p>
                    <p className="text-[white]">AIRPORT TRANSPORT</p>
                    <p className="text-[white]">ETC TRANSPORT</p>
                </nav>
            </div>

            <nav className="border-t-2 border-[#404040] py-3 bg-[#0c1315] ">
                <p className="text-[#CCCCCC] text-[14px] text-center">© 2023 Noushad zaman, All Rights Reserved</p>
            </nav>

        </footer>
    );
};

export default Footer;