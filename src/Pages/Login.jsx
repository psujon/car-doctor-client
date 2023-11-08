import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import loginImage from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const  {signinUser} = useContext(AuthContext);

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user_login = {email, password};
        console.log(user_login);

        signinUser(email, password)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <Header></Header>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2 mr-12">
                            <img src={loginImage} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLoginFormSubmit}>
                            <h1 className="text-5xl font-bold text-center">Login now!</h1>
                                <div className="form-control" >
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="text-center">New to Car Doctors? <Link to={`/signup`}>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;