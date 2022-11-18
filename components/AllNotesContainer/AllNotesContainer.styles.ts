import styled from "styled-components";


export const AllNotesContainerDiv = styled.div`
    width: 100%;
    height: auto;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    /* background-color: blueviolet; */

    ::-webkit-scrollbar {
    width: 0.1px;
    }   

    ::-webkit-scrollbar-track {
    background: white;
    }

    ::-webkit-scrollbar-thumb {
    background: white;
    }

`