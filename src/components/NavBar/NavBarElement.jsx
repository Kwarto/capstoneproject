import styled from "styled-components";

export const NavbarWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 box-shadow: var(--box-shadow);
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
    width: 28%;
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

  img{
      width: 20%;
      border-radius: 100%;
    }
`