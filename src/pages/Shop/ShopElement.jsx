import styled from "styled-components";

export const ShopItemWrapper = styled.div`
 padding: 5px 0;
 display: grid;
 grid-template-columns: 78% 20%;
 gap: 2%;

 @media screen and (max-width: 1024px){
  grid-template-columns: 1fr;
  overflow: hidden;
 }
`


export const ProductCard = styled.div`
 box-shadow: var(--box-shadow);
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 1.5rem;
 padding: 30px;

 @media screen and (max-width: 1024px){
  grid-template-columns: 1fr 1fr;
 }
 @media screen and (max-width: 768px){
  grid-template-columns: 1fr;
 }
`

export const CardItems = styled.div`
 box-shadow: 0 1rem .5rem var(--main-bg-variant-a);
 padding: 10px;
`

export const ProductFilter = styled.div`
 background: rgba(255, 72, 0, 0.288);
 box-shadow: var(--box-shadow);
 opacity: 0.78;
 margin-right: 5px;
 display: block;
 flex-direction: column;
 justify-content: space-between;
 gap: 2rem;
 padding: 8px;
`

export const FilterSelector = styled.div`
 background: #fff;
 min-height: 70vh;
 box-shadow: var(--box-shadow);
`

export const ShopSky = styled.div`
 margin-top: 5rem;
 padding: 100px 0;
 background: var(--main-bg);
`

export const ShopHeading = styled.div`
 color: #03032e;
 font-size: 30px;
 font-weight: 700;
 margin-top: 7%;
 text-align: center;
 text-decoration: underline;
`

export const Selectors = styled.div`
 font-size: 14px;
 margin-left: 15px;
 cursor: pointer;
`

export const BungCate = styled.div`
 margin-top: 18px;
 box-shadow: var(--box-shadow);
 padding: 8px;
 text-align: center;
 font-weight: 700;
`

export const SkyList = styled.div`
 background: #fff;
 /* margin: 0 15px; */
`

export const ShopBed = styled.div`
 margin: 5rem auto;
`