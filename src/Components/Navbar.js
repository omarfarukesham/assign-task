import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand text-black fw-bold" to='/'>ArtBoard.com</Link>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-black fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-black fw-bold" to="/canvas">Paint</Link>
                            </li>
                            {user ? (
                                <>
                                    <button onClick={logout} className="btn text-black fw-bold">
                                      SignOut
                                    </button>
                                </>
                            ) : (
                                <li className='nav-item'>
                                    <Link className='nav-link text-black fw-bold' to="/login">Login</Link>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;