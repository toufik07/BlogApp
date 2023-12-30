import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="nav1">
                <h1>Blog Website</h1>
            </div>
            <ul className='nav2'>
                <li><Link to={'/'} className='link'>Home</Link></li>
                <li><Link to={'/create'} className='link'>New-Blog</Link></li>
            </ul>
        </div>
    )
}
