import React , {createContext , useState} from 'react'

export type IAuthUserDetailsContext = {
    userName : string
    setUserName : React.Dispatch<React.SetStateAction<string>>
    userEmail : string 
    setUserEmail :  React.Dispatch<React.SetStateAction<string>>
    userPhotoUrl: string 
    setUserPhotoUrl : React.Dispatch<React.SetStateAction<string>>
    isUserLoggedIn: boolean
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    allNotes: string[]
    setAllNotes: React.Dispatch<any>
}

export interface Note {
    NoteTitle : string
    NoteDescription: string
    creatorEmail: string
    isCompleted: boolean
}


const AuthUserDetailsContext = createContext<IAuthUserDetailsContext | null>(null)

interface Props {
    children: React.ReactNode
}

const AuthUserDetailsContextWrapper = ({children}:Props) => {
    const [userName , setUserName] = useState<string>('')
    const [userEmail , setUserEmail] = useState<string>('')
    const [userPhotoUrl , setUserPhotoUrl] = useState<string>("")
    const [isUserLoggedIn , setIsUserLoggedIn] = useState<boolean>(false)

    const [allNotes, setAllNotes] = useState<any>([])

  return (
    <AuthUserDetailsContext.Provider value={{
        userName, setUserName,
        userEmail, setUserEmail,
        userPhotoUrl, setUserPhotoUrl,
        isUserLoggedIn, setIsUserLoggedIn,
        allNotes, setAllNotes
    }}>
        {children}
    </AuthUserDetailsContext.Provider>
  )
}

export {AuthUserDetailsContextWrapper , AuthUserDetailsContext}