// import logo from 'image/center-logo.png'
import React  from 'react';
import {Link } from 'react-router-dom'
const Navbar = () => {
    return ( <React.Fragment>
        <ul className='mainTopMenu'>
            <li> <Link  to="/">خانه</Link > </li>
            <li><Link  to="">درباره</Link ></li>
            <li><Link  to="">وبلاگ</Link ></li>
            <li><Link  to="/products">منوی ما</Link ></li>
            <li className='imageLogoBody' ><Link  to="" className='imageLogo' style={{backgroundImage: "url(./images/center-logo.png)"}}></Link ></li>

            <li><Link  to="">سفارش آنلاین</Link ></li>
            <li><Link  to="">پذیرای</Link ></li>
            <li><Link  to="">شعبه ها</Link ></li>
            <li><Link  to="">اطلاعات تماس</Link ></li>
        </ul>
    </React.Fragment> );
}
 
export default Navbar;
