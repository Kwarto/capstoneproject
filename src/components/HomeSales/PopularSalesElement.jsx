import styled from "styled-components";

export const PopSalesWrapper = styled.div`
 padding: 100px 0;
 background: var(--main-bg);
 border-radius: 0 0 80rem 0;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 1rem;
 min-height: 60vh;
`
export const PopSaleHeader = styled.h1`
 margin-left: 20px;
 transform: translateY(20px);
 background: #fff;
 width: fit-content;
 padding: 5px 30px;
`

export const PopSaleItem = styled.div`
 padding: 10px;
 background: #fff;
 box-shadow: var(--box-shadow);
 min-height: 50vh;
 margin: 0 10px;
 position: relative;
 top: 30px;
`
export const PopCate = styled.div`
 text-align: center;
 transform: translateY(-25px);
 background: rgb(241, 174, 43);
 padding: 8px;
 font-size: 20px;
 font-weight: 600;
`

export const CartIcon = styled.div`
 background: var(--main-bg);
 box-shadow: var(--box-shadow);
 width: max-content;
 padding: 10px;
 border-radius: 100%;
 display: flex;
 align-items: center;
 color: #fff;
 position: relative;
 bottom: 20px;
 cursor: pointer;
`

export const PopSaleImg = styled.div`
 img{
    width: 100%;
    transform: scale(1.07);
    transition: transform 2s ease;

    &:hover{
      transform: scale(1);
    }
 }
`

export const PopCaption = styled.div`
 text-align: center;
 box-shadow: var(--box-shadow);
 transform: translateY(20px);
 background: #fff;
`

export const PRWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 20px;
`

export const Price = styled.div`
 font-weight: 600;
`

export const Rate = styled.div`
 font-size: 16px;
 color: rgba(241, 175, 43, 0.925);
 margin: 2px;
`