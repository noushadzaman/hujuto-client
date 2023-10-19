import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(user => {
                console.log(user.user);
                navigate('/');
            })
            .then(error => {
                console.log(error.message)
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/');
            })
            .catch(data => {
                console.log(data)
            })
    }

    return (
        <div className="hero bg-base-200 py-[100px]">
            <div className="hero-content flex-col gap-8 lg:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src="Front car-pana.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-[2px]">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input  rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8]" required />
                                <Link to="/register" className="text-[#BFA37C] mt-2 text-[14px] tracking-widest">New to HUJUTO? Register here!</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <hr className='border-t-1 border-[#d6cab8]' />
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-primary"
                        >Log In With Google <FcGoogle /></button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Login;