import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
    return (
    <div className='single'>
        <div className="content">c</div>
        <div className="menu">m</div>
        <div className="edit"></div>

        <Link to={`/write?edit=2`}>Edit 2</Link>
        <Menu/>
    </div>


    );
}
 
export default Single;