import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../images/google.png'

const SignUp = () => {
    return (
        <div className='col-md-6 col-lg-4 mx-auto mt-5 p-4 border border-warning'>
            <h3 className='fs-2 fw-bold text-warning text-center'>SignUp</h3>

            <form className='text-center'>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder='Email' />
                    </div>
                </div>
                <div class="mb-3 row">

                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder='Name' />
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" placeholder='Password' />
                    </div>
                </div>
                <button className='btn btn-outline-warning' type="submit"> SignUp </button>
            </form>

            <p className='text-center fw-bold text-warning'>-------------------------------- Or -----------------------------</p>
            <div className='text-center'>
                <button className="btn btn-outline-warning"> <img class="rounded p-2" src={googleImg} alt="gImages" />Continue with Google</button>
            </div>
            <p className='text-center'><small>Already Register? <Link className='text-purple-500' to="/login">Create New Account</Link></small></p>
        </div>
    );
};

export default SignUp;