import styled from "styled-components";

export const HeaderSliderWrapper = styled.header`
 min-height: 90vh;
 background: var(--main-bg-variant);
 opacity: 0.95;
 border-radius: 90rem 0 0 0;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 5rem;

 @media screen and (max-width: 1024px){
  min-height: 70vh;
 }
`

export const SliderItem = styled.div`
  padding: 30px;
  background: #fff;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
`
 
export const SliderText = styled.h2`
 color: #02010a;
 font-size: 35px;
 font-weight: 600;
 text-align: center;
 text-transform: uppercase;

 @media screen and (max-width: 1024px){
  font-size: 30px;
 }
`

export const SliderImg = styled.div`
 img{
    width: 100%;
    filter: brightness(0.8) saturate(0.8);
    transition: filter 2s ease;

    &:hover{
        filter: brightness(1) saturate(1);
    }
 } 
`