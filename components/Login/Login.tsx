import React, {useState , useContext} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import { auth } from "../../firebaseconfig"
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth"


const Login = () => {
    const [isAuthing, isSetAuthing] = useState<boolean>(false)
    const {setUserName , setUserEmail , setUserPhotoUrl , setIsUserLoggedIn} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext

    const signInWithGoogle = async () => {
        isSetAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => {
            console.log(res);
            setUserName(res.user.displayName as string)
            setUserEmail(res.user.email as string)
            setUserPhotoUrl(res.user.photoURL as string)
            setIsUserLoggedIn(true)
        })
        .catch((error) => {
            console.log(error);
            isSetAuthing(false)
            setIsUserLoggedIn(false)
            
        })
    }

  return (
    <div style={{backgroundColor: "gray"}}>
        <button onClick={() => signInWithGoogle()}> signInWithGoogle </button>
    </div>
  )
}

export default Login