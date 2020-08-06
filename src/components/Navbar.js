import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import Gundam from '../images/gundam.png'
import gundamLogo from '../images/gundamLogo.png'
import './Navbar.css'

const Navbar = ({cart}) => {
    const dataCart = cart.length;
    return (
        <nav className="wrapper">
                <div className="container">
                    <div className="allLogo">
                        <div className="imageGundam">
                            <img src={Gundam} alt="gundam" />
                        </div>
                        <div className="gundamWorld">
                            <Link to="/" className="logo"><img src={gundamLogo} alt="gundamLogo"/></Link>
                        </div>
                    </div>
                    <ul className="menu">
                        <li className="cart"><Link to="/cart">My Cart {`(${dataCart})`}</Link></li>
                        {/* <li><i className="fas fa-shopping-cart"></i></li> */}
                    </ul>
                </div>
            </nav>  
    );
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(Navbar);