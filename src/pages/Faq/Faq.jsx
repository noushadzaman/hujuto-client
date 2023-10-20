import Location from "../Home/Location/Location";

const Faq = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-[100px]">


                <div className="container mx-auto mt-[120px] items-center">
                    <h2 className="text-[26px] md:text-[42px] text-[#0C1315] mb-[15px] text-center">Frequently Asked Questions</h2>
                    <p className="text-[14px] tracking-widest text-[#BFA37C] mb-[50px] text-center">LIST OF ANSWERS</p>
                </div>

                <div className="join join-vertical w-[80%] rounded-[2px]">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[#5f5c5c] text-[22px] font-medium">
                            What sets your luxury cars apart from other dealerships?
                        </div>
                        <div className="collapse-content text-[#5f5c5c] text-[15px]">
                            <p>Our luxury cars are meticulously curated to provide a blend of high-end performance, exceptional craftsmanship, and cutting-edge technology. We partner with renowned brands to ensure that each vehicle meets the highest standards of luxury and sophistication.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[#5f5c5c] text-[22px] font-medium">
                            Can I schedule a test drive for one of your luxury cars?
                        </div>
                        <div className="collapse-content text-[#5f5c5c] text-[15px]">
                            <p>Absolutely! We encourage you to experience the luxury and performance of our cars firsthand. You can easily schedule a test drive on our website or by contacting our customer service team. We want you to be certain that you are making the right choice.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[#5f5c5c] text-[22px] font-medium">
                            Are there financing options available for purchasing a luxury car from your website?
                        </div>
                        <div className="collapse-content text-[#5f5c5c] text-[15px]">
                            <p>Yes, we offer a range of flexible financing options tailored to meet your specific needs. Our finance experts are ready to assist you in finding the most suitable plan, whether it is a lease or a traditional purchase, to make your dream of owning a luxury car a reality.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[#5f5c5c] text-[22px] font-medium">
                            Do you offer any warranties or service packages for the luxury cars you sell?
                        </div>
                        <div className="collapse-content text-[#5f5c5c] text-[15px]">
                            <p> We take pride in the quality of our luxury vehicles, and to ensure your peace of mind, we provide comprehensive warranty options and service packages. These packages are designed to cover everything from routine maintenance to unexpected repairs, allowing you to enjoy your luxurious vehicle with confidence. Feel free to inquire about the specific details when you explore our car listings.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Location></Location>
        </div>
    );
};

export default Faq;
