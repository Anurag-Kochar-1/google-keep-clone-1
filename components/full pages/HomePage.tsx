import React, {useState, useEffect , useContext} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import AddTodoBox from '../AddTodoInput/AddTodoBox'
import AllNotesContainer from '../AllNotesContainer/AllNotesContainer'
import Login from '../Login/Login'
import { HomePageContainer } from './HomePage.styles'

const HomePage = () => {
  const {isUserLoggedIn , setIsUserLoggedIn , allNotes} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext
  const [isHyrdated, setIsHyrdated] = useState<boolean>(false)


  useEffect(() => {
    setIsHyrdated(true)
  },[])

  if(!isHyrdated) return null
  return (
    <HomePageContainer>
      {!isUserLoggedIn && <Login />}
      <AddTodoBox />

      <AllNotesContainer />
    </HomePageContainer>
  )
}

export default HomePage