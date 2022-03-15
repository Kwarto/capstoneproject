import styled from "styled-components";

export const HeaderCategoryWrapper = styled.div`
 padding: 100px 0;
`

export const CategoryWrapper = styled.div`
 padding: 100px 0;
 box-shadow: var(--box-shadow);
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 2rem;
 position: relative;
 &::before{
    position: absolute;
    left: -2px;
    top: -50px;
    content: 'Categories';
    color: #fff;
    width: 10%;
    height: 12%;
    background: var(--main-bg);
    text-align: center;
    font-weight: 700;
 }
`

export const CateItems = styled.div`
 padding: 30px 20px;
 box-shadow: 0 3px 10px rgba(15, 44, 172, 0.11);
 cursor: pointer;
 text-align: center;
 font-size: 25px;
 font-weight: 600;
 margin: 0 10px;
 position: relative;

 :nth-child(1), :nth-child(2), :nth-child(3){
    &:after{
    position: absolute;
    content: '';
    width: 20%;
    height: 20px;
    top: 40px;
    right: -52px;
    background: var(--main-bg);
 }
 }
`