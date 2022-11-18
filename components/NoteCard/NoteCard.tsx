import React, {useState , useContext} from 'react'
import NoteCardModal from '../Modal/NoteCardModal'
import { NoteCardBottomOptionsContainer, NoteCardDescription, NoteCardDiv, NoteCardTitle } from './NoteCard.styles'
import {MdDelete} from 'react-icons/md'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseconfig'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'

import { NoteCardModalBackground, NoteCardModalBottomOptions, NoteCardModalContainer, NoteCardModalDescription } from '../Modal/NoteCardModal.styles'

const NoteCard = ({cardData}:any) => {
  const {setAllNotes} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext
  const [isNoteCardModalOpen , setIsNoteCardModalOpen] = useState<boolean>(false)
  const [isNoteBottomOptionsVisible , setIsNoteBottomOptionsVisible] = useState<boolean>(false)

  const notesCollectionRef = collection(db, "notes");

  const getNotes = async () => {
    const data = await getDocs(notesCollectionRef)
    setAllNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    
  }

  const deleteNote = async (id: string) => {
    try {
      const noteDoc = doc(db, "notes", id)
      await deleteDoc(noteDoc)
      getNotes()
    } catch (error) {
      console.log(error);
      
    }
    
  }




  return (
    <NoteCardDiv 
      className='openNoteCardModal' 
      onClick={() => setIsNoteCardModalOpen(true)}
      onMouseEnter={() => setIsNoteBottomOptionsVisible(true)}
      onMouseLeave={() => setIsNoteBottomOptionsVisible(false)}
    >
        {/* <NoteCardModal 
          cardData={cardData} 
          isNoteCardModalOpen={isNoteCardModalOpen} 
          onClose={() => setIsNoteCardModalOpen(false)} /> */}


        
        <NoteCardTitle> {cardData.NoteTitle} </NoteCardTitle>
        <NoteCardDescription> {cardData.NoteDescription.slice(0,150)} {cardData.NoteDescription.length > 150 ? "..." : ""}  </NoteCardDescription>

        {isNoteBottomOptionsVisible && (
          <NoteCardBottomOptionsContainer>
            <MdDelete onClick={() => deleteNote(cardData.id)} style={{color: "black", fontSize: "20px" , cursor: "pointer"}} />
          </NoteCardBottomOptionsContainer>
        )}
    </NoteCardDiv>
  )
}

export default NoteCard