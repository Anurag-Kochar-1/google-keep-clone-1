import React, {useState, useEffect , useRef , useContext } from 'react'
import { AddTodoInputDiv , AddTodoInputDivTitle, NoteDescriptionInput, TittleInput } from './AddTodoBox.styles'
import { db } from '../../firebaseconfig'
import { addDoc , collection , getDocs } from 'firebase/firestore'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'

const AddTodoInput = () => {
  const {userName, userEmail, userPhotoUrl , setUserName , setUserEmail , setUserPhotoUrl , setIsUserLoggedIn , setAllNotes} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext
  const [isAddTodoInputOpen , setIsAddTodoInputOpen  ] = useState<boolean>(false)
  const [titleInput , setTittleInput] = useState<string>("")
  const [noteDescriptionInput , setNoteDescriptionInput] = useState<string>("")
  const AddTodoInputDivRef:any = useRef(null)
  const NoteDescriptionInputRef:any = useRef(null)

  const notesCollectionRef = collection(db, "notes");

  const handleClickOutside = (e:any) => {
    if(AddTodoInputDivRef.current && !AddTodoInputDivRef.current.contains(e.target)) {
      setIsAddTodoInputOpen(false)
    } else {
      
    }
  }

  const addNote = async () => {

    if(titleInput && noteDescriptionInput) {
      await addDoc(notesCollectionRef, {
        NoteTitle: titleInput,
        NoteDescription : noteDescriptionInput,
        isCompleted : false,
        creatorEmail: userEmail
      })
      setIsAddTodoInputOpen(false)
      setTittleInput("")
      setNoteDescriptionInput("")
    } else {
      alert("fill both fields")
    }
    
  }

  

   const getNotes = async () => {
    const data = await getDocs(notesCollectionRef)
    setAllNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    
  }
  


  useEffect(() => {
    document.addEventListener("click", handleClickOutside , true)
    
  }, [])


  return (
    <AddTodoInputDiv 
    ref={AddTodoInputDivRef}
      onClick={() => {
        setIsAddTodoInputOpen(true)
      }}  
      onKeyUp={(e) => {
        if(e.key == 'Enter') {
          addNote()
          getNotes()
        }
      }}
      >
       

        {!isAddTodoInputOpen && <AddTodoInputDivTitle> Take a Note... </AddTodoInputDivTitle>}

        {isAddTodoInputOpen && 
        <TittleInput  
        placeholder='Title' 
        value={titleInput}
        onChange={(e) => {setTittleInput(e.target.value)}}
        />}

        {isAddTodoInputOpen && 
        <NoteDescriptionInput 
        ref={NoteDescriptionInputRef}   
        placeholder='Take a note...' 
        value={noteDescriptionInput}
        onChange={(e) => {setNoteDescriptionInput(e.target.value)}}
        />}


    </AddTodoInputDiv>
  )
}


export default AddTodoInput
