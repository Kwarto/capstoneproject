import styled from "styled-components";

export const NavbarWrapper = styled.div`
 position: fixed;
 top: 0;
 width: 100%;
 z-index: 100;
 display: flex;
 background: #fff;
 align-items: center;
 justify-content: space-between;
 box-shadow: var(--box-shadow);
 @media screen and (max-width: 1024px) {
  padding: 3rem 0;
 }
`

export const LogoWrapper = styled.div`
 width: 10%;
 text-align: center;
 img{
    width: 38%;
 }

 @media screen and (max-width: 1024px) {
  width: 15%;
    position: absolute;
    left: 0;
    img{
    width: 45%;
 }
 }
`

export const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
  @media screen and (max-width: 1024px) {
    display: block;
    width: 30rem;
    padding: 20px;
  }
`

export const List = styled.div`
  display: flex;
  align-items: center;
  span{
    background: red;
    font-size: 10px;
    width: 17px;
    text-align: center;
    border-radius: 100px;
    cursor: pointer;
    position: relative;
    bottom: 6px;
    color: #fff;
    font-weight: 600;
  }
  padding: 0 40px;
  a{
    font-size: 15px;
    font-weight: 600;
    color: var(--main-bg);
    position: relative;
     
    @media screen and (max-width: 1024px){
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 60px;
    box-shadow: var(--box-shadow);
    padding: 20px 30px;
    width: 90%;
    display: none;
    align-items: center;
    justify-content: center;
  }
`

export const MenuBar = styled.div`
 margin-right: 35px;
 cursor: pointer;
 display: none;

 @media screen and (max-width: 1024px){
   display: flex;
   position: absolute;
   right: 0;
 }
`