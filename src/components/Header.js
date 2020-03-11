import React from 'react'
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Top List</Link>
            <Link to="/mylist" className="item">My List</Link>
            <div className="right menu">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Header;