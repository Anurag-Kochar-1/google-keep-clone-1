import React from 'react'
import { NoteCardModalBackground, NoteCardModalBottomOptions, NoteCardModalContainer, NoteCardModalDescription, NoteCardModalTitle } from './NoteCardModal.styles'

const NoteCardModal = ({cardData , setIsNoteCardModalOpen}:any) => {

  const closeModal = () => {
    console.log(`closeModal is running`);
    
    setIsNoteCardModalOpen(false)
  }
  
  return (
    <NoteCardModalBackground>
    
      <NoteCardModalContainer>
        <button onClick={() => {
              setIsNoteCardModalOpen(false);
            }}> X </button>
        <NoteCardModalTitle> {cardData.NoteTitle} </NoteCardModalTitle>
        <NoteCardModalDescription> {cardData.NoteDescription} </NoteCardModalDescription>


        <NoteCardModalBottomOptions>
          
        </NoteCardModalBottomOptions>
      </NoteCardModalContainer>
    </NoteCardModalBackground>
  )
}

export default NoteCardModal