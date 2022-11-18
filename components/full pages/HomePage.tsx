import { onAuthStateChanged } from 'firebase/auth'
import React, {useState, useEffect , useContext} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import { auth } from '../../firebaseconfig'
import AddTodoBox from '../AddTodoInput/AddTodoBox'
import AllNotesContainer from '../AllNotesContainer/AllNotesContainer'
import Login from '../Login/Login'
import { HomePageContainer } from './HomePage.styles'

const HomePage = () => {
  const [isHyrdated, setIsHyrdated] = useState<boolean>(false)
  const {userName, userEmail, userPhotoUrl , setUserName , setUserEmail , setUserPhotoUrl , setIsUserLoggedIn , isUserLoggedIn} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext

  useEffect(() => {
    setIsHyrdated(true)
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if(user) {
          console.log(user.email);
          
          setUserName(user.displayName as string)
          setUserEmail(user.email as string)
          setUserPhotoUrl(user.photoURL as string)
          setIsUserLoggedIn(true)
          
      } else {
          setIsUserLoggedIn(false)
      }
  
    })

    return () => AuthCheck()
  },[])



  if(!isHyrdated) return null
  return (
    <HomePageContainer>
      {!isUserLoggedIn && <Login />}

      {isUserLoggedIn && <AddTodoBox />}
      {isUserLoggedIn && <AllNotesContainer />}
    </HomePageContainer>
  )
}

export default HomePage