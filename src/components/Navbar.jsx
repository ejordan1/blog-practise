import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<div className='navbar'>
        <div className='container'>
        <div className='logo'>
            logo
        </div>
        <div className='links'>
            <Link className='link' to='/?cat=art'><h5>Art</h5></Link>
            <Link className='link' to='/?cat=science'><h5>science</h5></Link>
            <Link className='link' to='/?cat=tech'><h5>tech</h5></Link>
            <Link className='link' to='/?cat=cinema'><h5>cinema</h5></Link>
            <Link className='link' to='/?cat=design'><h5>design</h5></Link>
            <Link className='link' to='/?cat=food'><h5>food</h5></Link>
            <span>John</span>
            <span>Logout</span>
            <span className="write">
                <Link to="/write">Write</Link>
            </span>
             </div>
        </div>

    </div>);
}
 
export default Navbar;