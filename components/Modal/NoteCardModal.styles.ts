import styled from "styled-components"

export const NoteCardModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: gray;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoteCardModalContainer = styled.div`
    width: 300px;
    height: 500px;
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