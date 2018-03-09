import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return(
        <nav>
            <ul className={props.className}>
                <li><span className="fas fa-caret-right"></span><Link to='/'>Home</Link></li>
                <li><span className="fas fa-caret-right"></span><Link to='/About'>About us</Link></li>
                <li><span className="fas fa-caret-right"></span><Link to='/Services'>Services</Link></li>
                <li><span className="fas fa-caret-right"></span><Link to='/News'>News</Link></li>
                <li><span className="fas fa-caret-right"></span><Link to='/Blog'>Blog</Link></li>
                <li><span className="fas fa-caret-right"></span><Link to='/FAQ'>FAQ</Link></li>
                <li><span className="fas fa-caret-right"></span><Link to='/Contact'>Contact us</Link></li>
            </ul>
        </nav>
    );
  }  

export default Navigation;