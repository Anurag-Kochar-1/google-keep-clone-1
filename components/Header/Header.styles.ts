import styled, { StyledComponent } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-height: 100vh;
    background-color: red;
    overflow-x: hidden;
`




export const HeaderComponent = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0.5rem 1rem; */
    position: fixed;
    top: 0;

`

export const HeaderLeftComponent = styled.div`
    width: 10%;
    height: 10vh;
    background-color: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const HeaderRightComponent = styled.div`
    width: 20%;
    height: 10vh;
    background-color: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Heading = styled.h1 `
    font-weight: 500;
    font-size: 1.5rem;
    color: #5F6368;
    font-family: sans-serif;
`


export const ProfileAvatar = styled.img`
    src: "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1";
    alt: "dp";
    width: 50px;
    height: 50px;
`