import React from 'react'
import { NavbarWrapper, LeftList, LogoWrapper, NavList, List } from './NavBarElement'
import Logo from '../../images/jalel-real-estate-logo.png'
// import IoMdNotifications from 'react-icons/io'
// import MdAccountCircle from 'react-icons/md'
// import BsFillCartCheckFill from 'react-icons/bs'
function NavBar() {
  return (
    <>
      <NavbarWrapper>
        <LeftList>
           <List>
            <a href="shop">Shop</a>
           </List>
           <List>
            <a href="categories ">Categories</a>
           </List>
           <List>
            <a href="register">Register</a>
           </List>
        </LeftList>
        <LogoWrapper>
          <a href="/"><img src={Logo} alt="jalel-logo" /></a>
        </LogoWrapper>
        <NavList>
           <List>
            <a href="/" className='notify'>Notification</a>
           </List>
           <List>
            <a href="cart">Cart</a>
            <span>0</span>
           </List>
           <List>
            <a href="my-account">Account</a>
           </List>
        </NavList>
      </NavbarWrapper>
    </>
  )
}

export default NavBar