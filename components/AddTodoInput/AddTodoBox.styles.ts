import styled from "styled-components";


export const AddTodoInputDiv = styled.div`
    width: 80%;
    /* background-color: red; */
    max-height: fit-content;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: text;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 2rem 0;
    padding: 15px 0;


    @media screen and (min-width: 768px) and (max-width: 1024px) {
     /* background-color: blue; */
     width: 60%;
    }
    
    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        /* background-color: green; */
        width: 50%;
    }

    @media screen and (min-width: 1280px)  {
        /* background-color: purple; */
        width: 50%;
    }
`

export const AddTodoInputDivTitle = styled.p`
    padding: 0 20px ;
    font-family: sans-serif;
    color: gray;
    `

export const TittleInput = styled.input`
    width: 100%;
    height: 4rem;
    border-radius: 0%;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    font-weight: 600;
    font-size: 1rem;
    `

export const NoteDescriptionInput = styled.input`
    width: 100%;
    height: 6rem;
    border-radius: 0%;
    border: none;
    border-radius: 10px;
    font-weight: 400;
    padding: 0 10px;
    font-size: 0.9rem;
`
