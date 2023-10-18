import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero bg-base-200 py-[100px]">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-1/3">
                    <img src="Sign up-amico.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input  border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                            <Link to="/login" className="text-[#BFA37C] mt-2 text-[14px] tracking-widest">Already have an account? Login here!</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <hr className='border-t-1 border-[#d6cab8]' />
                        <div className="form-control">
                            <button className="btn btn-primary">Continue With <FcGoogle /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;