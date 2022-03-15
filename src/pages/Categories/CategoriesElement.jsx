import styled from "styled-components";

export const CategoriesWrapper = styled.div`
 padding: 30px 0;
`

export const CatWrapperHeading = styled.div`
 background: var(--main-bg);
 box-shadow: 0 1rem .5rem var(--main-bg-variant-a);
 border-radius: 20px 20px 0 0;
 color: #fff;
 cursor: pointer;
 font-size: 30px;
 font-weight: 700;
 margin: 0 auto;
 padding: 5px;
 width: 50%;
 text-align: center;
`

export const CategoryItemList = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 2rem;
 min-height: 80vh;
 margin: 10px 10px;
`

export const ItemList = styled.div`
 article{
   margin: 10% 30px;
   background: rgba(255, 0, 0, 0.075);
   position: relative;
   padding: 10px;
   h4{
    text-align: center;
    margin: 20px 0;
    font-size: 50px;
   }
   p{
    width: 95%;
    text-align: center;
    margin-top: 10px;
   }
 }
`