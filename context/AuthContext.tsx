import { createContext , useContext , useState , useEffect} from "react";
import { GoogleAuthProvider , signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebaseconfig";

const AuthContext = createContext()


interface Props {
    children: React.ReactNode
}

export const AuthContextProvider = ({children}:Props) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth , provider)
    }

    const [userName, setUserName] = useState<string>("")
    const [userEmail, setUserEmail] = useState<string>("")
    const [userProfilePicture, setUserProfilePicture] = useState<string>("")


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('user', user);
            
        })
        return () => {
            unSubscribe()
        }
    },[])

  return (
    <AuthContext.Provider value={{
        // userName, setUserName,
        // userEmail, setUserEmail,
        // userProfilePicture, setUserProfilePicture
        googleSignIn
    }}>
        {children}
    </AuthContext.Provider>
  )
}


export const UserAuth = () => {
    return useContext(AuthContext)
}