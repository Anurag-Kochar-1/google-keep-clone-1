import React , {useContext , useEffect , useState} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import ReactDOM from "react-dom";
import { NoteCardModalBackground, NoteCardModalBottomOptions, NoteCardModalContainer, NoteCardModalDescription, NoteCardModalTitle } from './NoteCardModal.styles'

const NoteCardModal = ({cardData , isNoteCardModalOpen , onClose}:any) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e:any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = isNoteCardModalOpen ? (
    <NoteCardModalBackground>
    
      <NoteCardModalContainer>
        <a href="#" onClick={handleCloseClick}> close </a>
        <NoteCardModalTitle> {cardData.NoteTitle} </NoteCardModalTitle>
        <NoteCardModalDescription> {cardData.NoteDescription} </NoteCardModalDescription>


        <NoteCardModalBottomOptions>
          
        </NoteCardModalBottomOptions>
      </NoteCardModalContainer>
    </NoteCardModalBackground>
  ) : (
    null
  )


  

  if(isBrowser) {
    return ReactDOM.createPortal  (
      modalContent,
     document.getElementById("modal-root") as HTMLElement
    )
  } else {
    return null
  }
  
}

export default NoteCardModal