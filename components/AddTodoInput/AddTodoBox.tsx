import React, {useState, useEffect , useRef} from 'react'
import { AddTodoInputDiv , NoteDescriptionInput, TittleInput } from './AddTodoBox.styles'

const AddTodoInput = () => {
  const [isAddTodoInputOpen , setIsAddTodoInputOpen  ] = useState<boolean>(false)
  const [titleInput , setTittleInput] = useState<string>("")
  const [noteDescriptionInput , setNoteDescriptionInput] = useState<string>("")
  const AddTodoInputDivRef:any = useRef(null)
  const NoteDescriptionInputRef:any = useRef(null)

  const handleClickOutside = (e:any) => {
    if(AddTodoInputDivRef.current && !AddTodoInputDivRef.current.contains(e.target)) {
      setIsAddTodoInputOpen(false)
    } else {
      if(NoteDescriptionInputRef.current) {
        // NoteDescriptionInputRef.current.focus()
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside , true)
  }),[]

  return (
    <AddTodoInputDiv 
      onClick={() => {
        setIsAddTodoInputOpen(true)
      

      }}
      ref={AddTodoInputDivRef}
      >
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