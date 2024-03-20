import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Signup = () => {

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className="hero h-[calc(100vh-69px)]  bg-[#e7cb3c]">
            <div className="hero-content flex-col ">

                <div className="card shrink-0  lg:w-[500px]  shadow-2xl bg-base-100 p-3">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mt-10">Sign up </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" {...register("name")} className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter Your Photo URL" {...register("photo")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Your Password" {...register("password")} className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#f0d345] hover:bg-[#e7cb3c]">Sign Up</button>
                        </div>
                        <p>Do you have and account? Please <Link className="text-[#f0d345] font-bold" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;