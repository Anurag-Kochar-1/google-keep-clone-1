import React , {useContext} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import NoteCardModal from '../Modal/NoteCardModal'
import NoteCard from '../NoteCard/NoteCard'
import { AllNotesContainerDiv } from './AllNotesContainer.styles'

const AllNotesContainer = () => {
  const {allNotes} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext
  return (
    <AllNotesContainerDiv>
      {allNotes && allNotes.map((note) => {
        return <NoteCard cardData = {note} />
      })}

    </AllNotesContainerDiv>
  )
}

export default AllNotesContainer