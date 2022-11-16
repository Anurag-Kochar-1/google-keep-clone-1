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
  return (
    <AuthUserDetailsContext.Provider value={{
        userName, setUserName,
        userEmail, setUserEmail,
        userPhotoUrl, setUserPhotoUrl,
        isUserLoggedIn, setIsUserLoggedIn
    }}>
        {children}
    </AuthUserDetailsContext.Provider>
  )
}

export {AuthUserDetailsContextWrapper , AuthUserDetailsContext}