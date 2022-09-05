import styled from "styled-components";

export const NavbarWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 box-shadow: var(--box-shadow);
 @media screen and (max-width: 1024px) {
  padding: 3rem 0;
 }
`

export const LeftList = styled.div`
 display: flex;
 justify-content: space-between;
 margin-left: 30px;
`

export const LogoWrapper = styled.div`
 width: 20%;
 /* margin: 0 auto; */
 text-align: center;
 img{
    width: 38%;
 }

 @media screen and (max-width: 1024px) {
    position: absolute;
    left: 0;
    img{
    width: 48%;
 }
 }
`
export const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
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
  padding: 0 30px;
  a{
    font-size: 15px;
    font-weight: 600;
    color: var(--main-bg);
    position: relative;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`