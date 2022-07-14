import React from 'react';

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
                        <input type="text" class="form-control" placeholder='Name' />
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" placeholder='Password' />
                    </div>
                </div>

                <button className='btn btn-primary' type="submit"> Submit</button>

            </form>
        </div>
    );
};

export default Login;