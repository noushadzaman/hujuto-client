/* eslint-disable  */
import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import useAxios from '../../hooks/useAxios';
import { useForm } from "react-hook-form"

const imageApiKey = import.meta.env.VITE_image_api_key;
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

const Register = () => {
    const axiosPublic = useAxios();
    const [error, setError] = useState('');
    const { googleSignIn, createUser, setNamePhoto } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (form) => {
        const name = form.name;
        const email = form.email;
        const password = form.password;
        const photo = form.photo;
        if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,}$/.test(password)) {
            setError('Password should have at least 6 character, a capital letter and one special character.')
            return;
        }
        axiosPublic.post(imageHostingUrl, { image: photo[0] }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                const photoUrl = res.data.data.display_url;


                createUser(email, password)
                    .then(() => {

                        setNamePhoto(name, photoUrl);
                        setError('');
                        const user = {
                            name,
                            email,
                            photoUrl,
                            role: 'customer'
                        }
                        axiosPublic.post(`/users`, user)
                            .then(() => {

                            })
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
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" placeholder="name" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" placeholder="email"
                                    className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password" placeholder="password"
                                    className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Profile picture</span>
                                </label>
                                <input
                                    {...register("photo", { required: true })}
                                    type="file" className="input rounded-[2px] border-t-1  placeholder-[#d6cab8] input-bordered w-[100%] file-input file-input-ghost max-w-[100%] border-[#d6cab8]"
                                />
                            </div>
                            <p className="text-[#e96969] font-semibold mt-2 text-[14px]">{error}</p>
                            <Link to="/login" className="text-[#BFA37C] mt-2 text-[14px] tracking-widest">Already have an account? Login here!</Link>
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