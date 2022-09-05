import styled from "styled-components";

export const SearchWrapper = styled.div`
 padding: 30px 0;
`

export const SearchContainer = styled.div`
 width: 50%;
 margin: 0 auto;
 position: relative;

 input{
    width: 100%;
    padding: 20px 50px;
    border-radius: 50px;
    box-shadow: var(--box-shadow);
    
    ::placeholder{
        cursor: unset;
        font-size: 16px;
        color: rgb(1, 1, 7);
    }
 }

 @media screen and (max-width: 1024px){
    width: 90%;
 }
`

export const SearchIcon = styled.div`
 width: fit-content;
 position: absolute;
 top: 22px;
 right: 2rem;
`