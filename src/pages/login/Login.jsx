import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen  bg-[#e7cb3c]">
            <div className="hero-content flex-col ">

                <div className="card shrink-0  w-[450px] h-[500px] shadow-2xl bg-base-100">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mt-10">Login </h1>
                    </div>
                    <form className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#f0d345] hover:bg-[#e7cb3c]">Login</button>
                        </div>
                        <p>Are you new here? Please Login</p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;