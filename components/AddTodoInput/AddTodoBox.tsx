import React, {useState, useEffect , useRef} from 'react'
import { AddTodoInputDiv , NoteDescriptionInput, TittleInput } from './AddTodoBox.styles'

const AddTodoInput = () => {
  const [isAddTodoInputOpen , setIsAddTodoInputOpen  ] = useState<boolean>(false)
  const AddTodoInputDivRef:any = useRef(null)
  const NoteDescriptionInputRef:any = useRef(null)

  const handleClickOutside = (e:any) => {
    if(!AddTodoInputDivRef.current.contains(e.target)) {
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
        {isAddTodoInputOpen && <TittleInput  placeholder='Title' />}
        {isAddTodoInputOpen && <NoteDescriptionInput ref={NoteDescriptionInputRef}   placeholder='Take a note...' />}
    </AddTodoInputDiv>
  )
}

export default AddTodoInput