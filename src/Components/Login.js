import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../images/google.png'

const Login = () => {

    return (
        <div className='col-md-6 col-lg-4 mx-auto mt-5 p-4 border border-primary'>
            <h3 className='fs-2 fw-bold text-primary'>Login</h3>

            <form>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder='Email' />
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" placeholder='Password' />
                    </div>
                </div>
                <button className='btn btn-primary' type="submit">LogIn</button>
            </form>
            <p className='text-center fw-bold text-primary'>-------------------------------- Or -----------------------------</p>
            <div className=''>
                <button className="btn btn-outline-primary"> <img class="rounded p-2" src={googleImg} alt="gImages" />Continue with Google</button>
            </div>
            <p className=''><small>New user, please Register? <Link className='text-purple-500' to="/signUp">Register Here</Link></small></p>
        </div>
    );
};

export default Login;