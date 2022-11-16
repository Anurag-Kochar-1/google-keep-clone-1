import React, {useState, useEffect} from 'react'
import AddTodoBox from '../AddTodoInput/AddTodoBox'
import { HomePageContainer } from './HomePage.styles'

const HomePage = () => {
  const [isHyrdated, setIsHyrdated] = useState<boolean>(false)


  useEffect(() => {
    setIsHyrdated(true)
  },[])

  if(!isHyrdated) return null
  return (
    <HomePageContainer>
      <AddTodoBox />
    </HomePageContainer>
  )
}

export default HomePage