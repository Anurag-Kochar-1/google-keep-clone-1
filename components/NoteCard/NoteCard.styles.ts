import styled from "styled-components";


export const NoteCardDiv = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin: 30px;
    overflow-x: scroll;
    overflow-y: scroll;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 20px;
    font-family: sans-serif;
    cursor: pointer;

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

