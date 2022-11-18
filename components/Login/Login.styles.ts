import styled from "styled-components";


export const LoginContainer = styled.div`
    width: 50%;
    height: 50vh;
    /* background-color: lightgray; */
    margin-top: 7vh;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media (min-width: 1024px) {
        margin-left: 6%;
    } 
`


export const SiginButton = styled.button`
    padding: 15px 60px;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    outline: none;
    color: black;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);


    &:hover{
        cursor: pointer;
    }
`