import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Login = () => {
    const { handleSignIn } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        handleSignIn(email, password)
            .then((currentUser) => console.log(currentUser.user))
            .catch((error) => console.log(error))
    }
    return (
        <div className="hero h-[calc(100vh-69px)]  bg-[#e7cb3c]">
            <div className="hero-content flex-col ">

                <div className="card shrink-0  lg:w-[450px]  shadow-2xl bg-base-100">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mt-10">Login </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#f0d345] hover:bg-[#e7cb3c]">Login</button>
                        </div>
                        <p>Are you new here? Please <Link className="text-[#f0d345] font-bold" to='/signup'>signup</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;