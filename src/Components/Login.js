import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import auth from '../firebase.init';
import googleImg from '../images/google.png'
import Loading from './Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser || user) {
        navigate(from, { replace: true })
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='col-md-6 col-lg-4 mx-auto mt-5 p-4 border border-primary rounded'>
            <h3 className='fs-2 fw-bold text-primary'>Login</h3>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input form-control"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red">{errors.email.message}</span>}
                        </label>
                    </div>
                </div>

                <div class="mb-3 row">
                    <div class="col-sm-10">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input form-control"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                    </div>
                </div>
                <button className='btn btn-outline-primary' type="submit">LogIn here </button>
            </form>

           
            <p className='fw-bold text-primary my-2'>------------------- Or --------------------</p>
            <div className=''>
                <button className="btn btn-outline-primary" onClick={() => signInWithGoogle()} > <img class="rounded p-2" src={googleImg} alt="gImages" />Continue with Google</button>
            </div>
            <p className=''><small>New user, please Register? <Link className='text-purple-500' to="/signUp">Register Here</Link></small></p>
        </div>
    );
};

export default Login;