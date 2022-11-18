import React , {useContext} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import NoteCardModal from '../Modal/NoteCardModal'
import NoteCard from '../NoteCard/NoteCard'
import { AllNotesContainerDiv } from './AllNotesContainer.styles'

const AllNotesContainer = () => {
  const {allNotes , userEmail , searchInput} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext
  // console.log(`userEmail -> ${userEmail}`);
  
  return (
    <AllNotesContainerDiv>
      {allNotes && allNotes.filter((note) => {
        if(!searchInput) {
          return note
        } else if (note.NoteTitle.toLowerCase().includes(searchInput.toLowerCase())) {
          return note
        }
      }).map((note:any , i) => {
        return note.creatorEmail === userEmail ?  <NoteCard key={i} cardData = {note} /> : null
      })}

    </AllNotesContainerDiv>
  )
}

export default AllNotesContainer



