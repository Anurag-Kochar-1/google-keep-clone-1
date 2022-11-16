import styled from "styled-components"

export const NoteCardModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    top: 0%;
    left: 0%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoteCardModalContainer = styled.div`
    width: 400px;
    height: 700px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border: 1px solid black;
    z-index: 10;
`

export const NoteCardModalTitle = styled.h3`

`

export const NoteCardModalDescription = styled.div`

`

export const NoteCardModalBottomOptions = styled.div`

`