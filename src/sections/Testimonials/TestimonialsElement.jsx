import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
 padding: 20px 0;
 background: var(--main-bg);
 margin: 5rem 0;
`

export const TestHeading = styled.div`
 text-align: center;
 font-size: 3rem;
 padding-bottom: 10px;
 color: #fff;
 font-weight: 700;
`

export const TestimonialListWrapper = styled.div`
 background: #fff;
 box-shadow: var(--box-shadow);
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 1.5rem;
 place-items: center;
 margin: 50px;
 padding: 60px 20px;

 @media screen and (max-width: 1024px){
  grid-template-columns: 1fr;
 }
`

export const ListItems = styled.article`
 background: rgb(241,174,43);
 height: max-content;
 @media screen and (max-width: 1024px){
  margin-top: 15px;
}
 strong{
    text-align: center;
    margin: 0 30%;
    font-size: 20px;
 }
`
export const Items = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 2rem;
  position: relative;
  bottom: 30px;
  height: max-content;
  border: 1px solid rgba(243, 175, 2, 0.975);
  right: 40px;
  @media screen and (max-width: 1024px){
    right: 34px;
  }
  img{
    width: 15%;
    position: relative;
    right: 50px;
    border: 3px solid var(--main-bg);
    border-radius: 100%;
    display: flex;
    height: 10%;
  }
`