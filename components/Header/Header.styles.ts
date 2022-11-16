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
    width: 10%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    
`

export const HeaderRightComponent = styled.div`
    width: 20%;
    height: 7vh;
    /* background-color: gray; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Heading = styled.h1 `
    font-weight: 500;
    font-size: 1.5rem;
    color: #5F6368;
    font-family: sans-serif;
    cursor: pointer;
`


export const ProfileAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
