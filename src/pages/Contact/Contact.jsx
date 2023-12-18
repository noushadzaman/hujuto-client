import { Map, Marker } from "pigeon-maps"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();
    const handleMessage = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Message has been sent",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div>
            <div className="container mx-auto mt-[40px] mb-[80px]">
                <h2 className="text-[26px] md:text-[42px] text-[#0C1315] mb-[15px] text-center">Our physical store is located at<br></br></h2>
                <p className="text-[14px] tracking-widest text-[#BFA37C] mb-[50px] text-center">Dhaka, Bangladesh.</p>
                <div className="mx-auto">
                    <Map height={600} defaultCenter={[24.4769288, 90.2934413]} defaultZoom={7}>
                        <Marker width={50} anchor={[23.708552, 90.380608]} />
                    </Map>
                </div>
            </div>
            <div className="container mx-auto  mb-[100px]">
                <h2 className="text-[26px] md:text-[42px] text-[#0C1315] mb-[15px] text-center">You can send us message<br></br>below here.</h2>
                <p className="text-[14px] tracking-widest text-[#BFA37C] mb-[50px] text-center">Contact us</p>
                <div className="mx-auto">
                    <form
                        ref={form}
                        onSubmit={handleMessage}
                        className="space-y-5 text-[#BFA37C]">
                        <div className="input-container">
                            <input name="user_name" type="text" placeholder="Your name" className=" w-[100%] input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                        </div>
                        <div className="input-container">
                            <input className=" w-[100%] input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" type="email" name="user_email" placeholder="Your email" required />
                        </div>

                        <div className="input-container">
                            <textarea className=" w-[100%] input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" type="area" name="message" placeholder="Your message" required />
                        </div>
                        <button className="btn-primary w-full font-bold h-[50px]">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;