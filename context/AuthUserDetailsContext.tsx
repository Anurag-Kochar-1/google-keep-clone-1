import React , {createContext , useState} from 'react'
import { Note } from "../customs/types"

export type IAuthUserDetailsContext = {
    userName : string
    setUserName : React.Dispatch<React.SetStateAction<string>>
    userEmail : string 
    setUserEmail :  React.Dispatch<React.SetStateAction<string>>
    userPhotoUrl: string 
    setUserPhotoUrl : React.Dispatch<React.SetStateAction<string>>
    isUserLoggedIn: boolean
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    allNotes: Note[]
    setAllNotes: React.Dispatch<any>
    isNoteCardModalOpen : boolean 
    setIsNoteCardModalOpen : React.Dispatch<React.SetStateAction<boolean>>
    searchInput: string
    setSearchInput : React.Dispatch<React.SetStateAction<string>>
}

// export interface Note {
//     NoteTitle : string
//     NoteDescription: string
//     creatorEmail: string
//     isCompleted: boolean
// }


const AuthUserDetailsContext = createContext<IAuthUserDetailsContext | null>(null)

interface Props {
    children: React.ReactNode
}

const AuthUserDetailsContextWrapper = ({children}:Props) => {
    const [userName , setUserName] = useState<string>('')
    const [userEmail , setUserEmail] = useState<string>('')
    const [userPhotoUrl , setUserPhotoUrl] = useState<string>("")
    const [isUserLoggedIn , setIsUserLoggedIn] = useState<boolean>(false)

    const [allNotes, setAllNotes] = useState<Note[]>([])

    const [ isNoteCardModalOpen , setIsNoteCardModalOpen ] = useState<boolean>(false)


    const [ searchInput , setSearchInput ] = useState<string>("")


  return (
    <AuthUserDetailsContext.Provider value={{
        userName, setUserName,
        userEmail, setUserEmail,
        userPhotoUrl, setUserPhotoUrl,
        isUserLoggedIn, setIsUserLoggedIn,
        allNotes, setAllNotes,
        isNoteCardModalOpen , setIsNoteCardModalOpen,
        searchInput, setSearchInput
    }}>
        {children}
    </AuthUserDetailsContext.Provider>
  )
}

export {AuthUserDetailsContextWrapper , AuthUserDetailsContext}