import styled from "styled-components";


export const NoteCardDiv = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin: 30px;
    overflow-x: hidden;
    overflow-y: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 20px;
    font-family: sans-serif;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;

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
export const NoteCardTitle = styled.h3`
    font-weight: 500;
    padding: 10px 0;
    font-family: sans-serif;    
    font-size: 1.4rem;
`

export const NoteCardDescription = styled.h3`
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 20px;
    font-family: sans-serif;
    font-size: 1rem;
    flex: 1;
    
`

export const NoteCardBottomOptionsContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 20px;
    /* background-color: red; */
    position: absolute;
    bottom: 0%;
    left: 0%;
    right: 0%;
    animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;

    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    @-moz-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    @-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    @-ms-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

`