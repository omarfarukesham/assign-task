import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../firebase.init';
import googleImg from '../images/google.png'
import Loading from './Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const[token] = useToken(user || gUser);
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    if (gUser || user) {
        navigate(from, { replace: true })
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }
    return (
        <div className='col-md-6 col-lg-4 mx-auto mt-5 p-4 border border-warning'>
            <h3 className='fs-2 fw-bold text-warning text-center'>SignUp</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input form-control"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                </div>
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
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                {signInError}
                <input className='btn btn-outline-warning ' type="submit" value="Sign Up" />
            </form>

            <p className='text-center fw-bold text-warning'>-------------------------------- Or -----------------------------</p>
            <div className='text-center'>
                <button className="btn btn-outline-warning"  onClick={() => signInWithGoogle()}> <img class="rounded p-2" src={googleImg} alt="gImages" />Continue with Google</button>
            </div>
            <p className='text-center'><small>Already Register? <Link className='text-purple-500' to="/login">Create New Account</Link></small></p>
        </div>
    );
};

export default SignUp;