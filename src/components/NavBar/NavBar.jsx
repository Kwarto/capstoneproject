import React from 'react'
import { NavbarWrapper, MenuBar, LogoWrapper, NavList, List } from './NavBarElement'
import Logo from '../../images/jalel-real-estate-logo.png'
import {FaBars} from 'react-icons/fa'
function NavBar() {
  return (
    <>
      <NavbarWrapper>
        <LogoWrapper>
          <a href="/"><img src={Logo} alt="jalel-logo" /></a>
        </LogoWrapper>
        <NavList className='nav-item'>
           <List>
            <a href="/">Home</a>
           </List>
           <List>
            <a href="shop">Shop</a>
           </List>
           <List>
            <a href="categories ">Categories</a>
           </List>
           <List>
            <a href="cart">Cart</a>
            <span>0</span>
           </List>
           <List>
            <a href="register">Register</a>
           </List>
           <List>
            <a href="/" className='notify'>Notification</a>
           </List>
           <List>
            <a href="my-account">Account</a>
           </List>
        </NavList>
        <MenuBar>
         <FaBars className='menuBar' />
        </MenuBar>
      </NavbarWrapper>
    </>
  )
}

export default NavBar