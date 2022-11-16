import React,{useState , useContext} from 'react'
import { auth } from '../../firebaseconfig'
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth"
import { useRouter } from 'next/router'
import { AuthUserDetailsContext } from "../../context/AuthUserDetailsContext"


type IAuthUserDetailsContext =  {
    userName : string
    setUserName : React.Dispatch<React.SetStateAction<string>>
    userEmail : string 
    setUserEmail :  React.Dispatch<React.SetStateAction<string>>
    userPhotoUrl: string 
    setUserPhotoUrl : React.Dispatch<React.SetStateAction<string>>
}

const SignInPage = () => {
    const content = useContext(AuthUserDetailsContext)
    
    
        
        
    const router = useRouter()
    const [isAuthing, isSetAuthing] = useState<boolean>(false)


    const signInWithGoogle = async () => {
        isSetAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => {
            console.log(res);
            router.push('/')
            content?.setUserName(res.user.displayName as string)
            content?.setUserEmail(res.user.email as string)
            content?.setUserPhotoUrl(res.user.photoURL as string)
        })
        .catch((error) => {
            console.log(error);
            isSetAuthing(false)
            
        })
    }
  return (
    <div>
        <button onClick={() => signInWithGoogle()}> signInWithGoogle </button>
    </div>
  )
}

export default SignInPage