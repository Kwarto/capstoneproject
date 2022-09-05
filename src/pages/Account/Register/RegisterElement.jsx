import styled from "styled-components";
import LogoA from '../../../images/jalel-real-estate-logoWT.png'
export const RegisterWrapper = styled.div`
 padding: 60px 0;
 min-height: 550px;
 height: 100%;
`

export const RegisterFormContainer = styled.div`
    padding: 100px 20px;
    box-shadow: var(--box-shadow);
    min-height: 450px;
    display: grid;
    grid-template-columns: 58% 40%;
    gap: 2%;
    form{
        background: #fff;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        input, button{
            border: 1px solid var(--main-bg);
            margin-top: 30px 10px;
            padding: 14px 50px;
            border-radius: 50px;
            width: 100%;
            margin: 10px auto;
            font-size: 14px;
            font-weight: 600;

            ::placeholder{
                font-size: 16px;
                color: var(--main-bg);
                cursor: unset;
            }
        }

        button{
            width: 40%;
            background: var(--main-bg);
            font-size: 20px;
            font-weight: 700;
            border: none;
            box-sizing: var(--box-shadow);
            cursor: pointer;
            color: #fff;
            @media screen and (max-width: 1024px){
                width: 60%;
            }
        }
    }

 @media screen and (max-width: 1024px){
    grid-template-columns: 100%;
 }
`

export const FormWrapper = styled.div`
 h3{
    text-align: center;
    margin: 10px 0;
    font-size: 30px;
 }
`

export const LoginWith = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
margin: 10px 0;
 .log-wit{
    background: rgb(236, 141, 32);
    margin: 0 20px;
    font-size: 2.5rem;
    padding: 8px;
    border-radius: 50px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    color: #fff;

    &:hover{
        background: var(--main-bg);
        color: rgb(236, 141, 32);
    }
 }
`

export const UserData = styled.div`
 display: flex;
 justify-content: space-evenly;
 gap: 1.5rem;
 margin: 10px 20px;

 @media screen and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    margin: 5px 20px;
 }
`

export const SideImg = styled.div`
 padding: 100px 0;
 background: linear-gradient(165deg, var(--main-bg), var(--main-bg-variant)),url(${LogoA});
 background-position: center;
 background-repeat: repeat;
 background-size: 25%;  
 border-radius: 1rem;

 h3{
    text-align: center;
    font-size: 40px;
    margin-top: 50px;
    background: #fff;
    opacity: 0.87;
    padding: 5px;
    height: 30vh;

    @media screen and (max-width: 1024px){
        height: 18vh;
        font-size: 30px;
    }
 }
`

export const AlreadyWrapper = styled.div`
 display: flex;
 justify-content: space-evenly;
 margin: 20px auto;
 width: 50%;

 a{
    color: var(--main-bg);
    text-decoration: underline;
 }

 @media screen and (max-width: 1024px){
    width: 100%;
    justify-content: space-around;
 }
`