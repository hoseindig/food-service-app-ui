import logo from './image/center-logo.png'
import React  from 'react';

const Navbar = () => {
    return ( <React.Fragment>
        <ul className='mainTopMenu'>
            <li> <a to="">خانه</a> </li>
            <li><a to="">درباره</a></li>
            <li><a to="">وبلاگ</a></li>
            <li><a to="">منوی ما</a></li>
            {/* <li><a to="" ><img width="100" src={logo} className='imageLogo'/></a></li> */}
            <li className='imageLogoBody'><a to="" className='imageLogo'></a></li>

            <li><a to="">سفارش آنلاین</a></li>
            <li><a to="">پذیرای</a></li>
            <li><a to="">شعبه ها</a></li>
            <li><a to="">اطلاعات تماس</a></li>
        </ul>
    </React.Fragment> );
}
 
export default Navbar;
