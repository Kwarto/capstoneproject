import styled from "styled-components";
import FooterBg from '../../images/world-map.png'
export const FooterWrapper = styled.div`
 padding: 50px 0;
 background: linear-gradient(134deg, rgba(59, 7, 73, 0.897),rgba(72, 23, 85, 0.781)), url(${FooterBg});
 color: #fff;
 font-weight: 600;
`

export const FooterContent = styled.div`
 display: grid;
 grid-template-columns: 30% 68%;
 gap: 2%;

 @media screen and (max-width: 1024px){
   grid-template-columns: 100%;
 }
 @media screen and (max-width: 768px) {
   grid-template-columns: 1fr;
 }
`

export const LeftContent = styled.div`
min-height: 60vh;
background: #fff;
box-shadow: var(--box-shadow);
color: #000000;
text-align: center;
margin: 0 10px;

@media screen and (max-width: 1024px){
   min-height: 50vh;
}

.last{
    margin-top: 50px;
}
`
export const FooterLogo = styled.div`
 width: 40%;
 margin: 0 auto;
 img{
    width: 100%;
 }
`

export const FooterText = styled.div`
`


export const OurLine = styled.h2`
font-size: 30px;
margin-top: 15px;
`

export const RightContent = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 1rem;
 margin: 0 10px;

 @media screen and (max-width: 1024px) {
   grid-template-columns: 1fr;
 }
 @media screen and (max-width: 768px) {
   grid-template-columns: 1fr;
 }
`

export const FooterList = styled.div`
 min-height: 25vh;
 background: rgba(219, 119, 4, 0.945);
 
 img{
    width: 80%;
    margin-left: 10%;
    margin-top: 15px;
 }

 @media screen and (max-width: 1024px) {
   min-height: 34vh;
   img{
    width: 50%;
    margin-left: 28%;
    margin-top: 15px;
 }
 }
`

export const H3 = styled.h3`
 font-size: 25px;
 margin-top: 10px;
 text-align: center;
`
export const H4 = styled.div`
 margin-top: 50px;
 display: flex;
 flex-direction: column;
 align-items: center;

 a{
    margin-top: 20px;
    color: black;
    font-weight: 700;
    font-size: 20px;
 }

 h5{
    font-size: 25px;
 }
`

export const FooterIcons = styled.div`
 text-align: center;
 margin-top: 20px;
 .f-icons{
    background: var(--main-bg);
    width: 40px;
    height: 40px;
    margin: 10px; 
    padding: 8px;
    border-radius: .5rem;
    cursor: pointer;

    &:hover{
        color: rgb(241, 141, 25);
    }
 }
`

export const FooterRight = styled.div`
 box-shadow: 10px 0 10px #001aff14;
 padding: 20px 0;
 text-align: center;
 font-size: 18px;
 font-weight: 700;
`