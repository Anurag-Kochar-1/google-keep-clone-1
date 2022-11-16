import React,{useState , useEffect , useContext} from 'react'
import {auth} from "../../firebaseconfig"
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext';

export interface IAuthRouteProps {
    children: React.ReactNode
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({children}:IAuthRouteProps) => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    const {isUserLoggedIn , setIsUserLoggedIn} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext

    useEffect(() => {
        AuthCheck()

        return () => AuthCheck()
    },[auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false)
            setIsUserLoggedIn(true)
        } else {
            console.log("Unauthorized")
            setIsUserLoggedIn(false)
        }
    })

    if(loading) return <p> Loading </p>
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthRoute