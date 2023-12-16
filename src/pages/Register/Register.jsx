import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {
    const [error, setError] = useState('');
    const { googleSignIn, createUser, setNamePhoto } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.PhotoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,}$/.test(password)) {
            setError('Password should have at least 6 character, a capital letter and one special character.')
            return;
        }
        createUser(email, password)
            .then(() => {
                setNamePhoto(name, photoURL);
                setError('');
                navigate('/');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registered successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registered successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(data => {
                console.log(data)
            })
    }
    return (
        <div className="hero bg-base-200 py-[100px]">
            <div className="hero-content gap-8 flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-1/3">
                    <img src="Sign up-amico.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full rounded-[2px] max-w-sm shadow-2xl bg-base-100">
                    <div className='card-body'>
                        <form onSubmit={handleCreateUser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name"
                                    className="rounded-[2px] input border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">PhotoUrl</span>
                                </label>
                                <input name='PhotoUrl' type="text" placeholder="photourl"
                                    className=" file:bg-violet-50 rounded-[2px] input border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email"
                                    className="rounded-[2px] input border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password"
                                    className="rounded-[2px] input border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                                <p className="text-[#e96969] font-semibold mt-2 text-[14px]">{error}</p>
                                <Link to="/login" className="text-[#BFA37C] mt-2 text-[14px] tracking-widest">Already have an account? Login here!</Link>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                        <hr className='border-t-1 border-[#d6cab8]' />

                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-primary"
                        >Continue With <FcGoogle /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;