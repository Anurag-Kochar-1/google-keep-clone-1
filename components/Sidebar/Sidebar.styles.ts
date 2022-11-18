import styled from "styled-components";

export const SidebarComponent = styled.div`
    border-right: 1px solid lightgray;
    width: 6%;
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 20px 0;
    position: fixed;
    top: 7vh;
    left: 0;
    display: none;



    @media (min-width: 1024px) {
        display: flex;
        
    }
`