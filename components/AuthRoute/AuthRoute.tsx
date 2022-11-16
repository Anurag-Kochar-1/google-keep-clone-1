import React,{useState , useEffect} from 'react'
import {auth} from "../../firebaseconfig"
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';

export interface IAuthRouteProps {
    children: React.ReactNode
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({children}:IAuthRouteProps) => {
    // const { children } = props;
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        AuthCheck()

        return () => AuthCheck()
    },[auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false)
        } else {
            console.log("Unauthorized")
            router.push('/signin')
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