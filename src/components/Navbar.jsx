import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        // <div className="navbar navbar-expand-lg navbar-light bg-light" >
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div className=" collapse navbar-collapse" id="navbarTogglerDemo01">
        //         <h2>BLOG</h2>
        //     </div>
        //     <ul className=' navbar-nav mr-auto mt-2 mt-lg-0'>
        //         <li class="nav-item active"><Link to={'/'} className='link'>Home</Link></li>
        //         <li class="nav-item"><Link to={'/create'} className='link'>New-Blog</Link></li>
        //     </ul>
        // </div >

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h2 className='navbar-brand '>BLOG</h2>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <ul class="nav justify-content-center text-center">
                        <li class="nav-item">
                        <Link to={'/'} className='nav-link'>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to={'/create'} className='nav-link'>New-Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
