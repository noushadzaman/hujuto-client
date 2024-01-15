
const Location = () => {
    return (
        <div className="bg-[#f7f5f2] flex flex-col md:flex-row items-center justify-center gap-8 xl:gap-x-64 border-b-2 py-[50px] text-[#c9b190]">
            <div className="flex items-center gap-5 ">
                <img className="h-[45px]" src="content-bottom-icon-001.png" alt="" />
                <div>
                    <p className="text-[#c9b190] font-semibold">s11 Rue de la Mutualité,</p>
                    <p className="text-[#c9b190] font-semibold">92400 Paris</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <img className="h-[45px]" src="content-bottom-icon-003.png" alt="" />
                <div>
                    <p className="text-[#c9b190] font-semibold">Phone: (012) 345 6789 0123;</p>
                    <p className="text-[#c9b190] font-semibold">Email: luxe@example.com</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <img className="h-[45px]" src="h1-icon-img-1.2.png" alt="" />
                <div>
                    <p className="text-[#c9b190] font-semibold">Mon-Sat 09:00-23:00;</p>
                    <p className="text-[#c9b190] font-semibold">Sunday is closed.</p>
                </div>
            </div>
        </div>
    );
};

export default Location;