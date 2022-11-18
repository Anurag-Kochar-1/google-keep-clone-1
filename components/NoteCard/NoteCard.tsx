import React, {useState} from 'react'
import NoteCardModal from '../Modal/NoteCardModal'
import { NoteCardDiv } from './NoteCard.styles'

const NoteCard = ({cardData}:any) => {
  const [ isNoteCardModalOpen , setIsNoteCardModalOpen ] = useState<boolean>(false)

  return (
    <NoteCardDiv className='openNoteCardModal' >
        {isNoteCardModalOpen && <NoteCardModal cardData={cardData} setIsNoteCardModalOpen={setIsNoteCardModalOpen}  />}
        
        <h3> {cardData.NoteTitle} </h3>
        <p> {cardData.NoteDescription} </p>
    </NoteCardDiv>
  )
}

export default NoteCard