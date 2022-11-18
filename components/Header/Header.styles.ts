import styled, { StyledComponent } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-height: 100vh;
    /* background-color: red; */
    overflow-x: hidden;
`



export const HeaderComponent = styled.header`
    width: 100%;
    height: 7vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0.5rem 1rem; */
    position: fixed;
    top: 0;
    border-bottom: 1px solid lightgray;

`

export const HeaderLeftComponent = styled.div`
    width: 35%;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    background-color: gray;

    @media (min-width: 1024px) {
        width: 20%;
        justify-content: space-around;
    }


    
    
`

export const HeaderRightComponent = styled.div`
    width: 20%;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: none;
    
    
    @media (min-width: 1024px) {
        display: inline-flex;
        background-color: gold;
        width: 30%;
    }
`

export const Heading = styled.h1 `
    font-weight: 500;
    font-size: 1.5rem;
    color: #5F6368;
    font-family: sans-serif;
    cursor: pointer;
    display: none;

    @media (min-width: 768px) {
        display: inline;
    }
`


export const ProfileAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
