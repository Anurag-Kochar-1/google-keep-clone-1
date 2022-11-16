import React, {useState, useEffect , useContext} from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import AddTodoBox from '../AddTodoInput/AddTodoBox'
import Login from '../Login/Login'
import { HomePageContainer } from './HomePage.styles'

const HomePage = () => {
  const {isUserLoggedIn , setIsUserLoggedIn} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext
  const [isHyrdated, setIsHyrdated] = useState<boolean>(false)


  useEffect(() => {
    setIsHyrdated(true)
  },[])

  if(!isHyrdated) return null
  return (
    <HomePageContainer>
      {!isUserLoggedIn && <Login />}
      <AddTodoBox />
    </HomePageContainer>
  )
}

export default HomePage