import React, {useState, useEffect} from 'react'
import AddTodoBox from '../AddTodoInput/AddTodoBox'
import { HomePageContainer } from './HomePage.styles'

const HomePage = () => {


  return (
    <HomePageContainer>
      <AddTodoBox />
    </HomePageContainer>
  )
}

export default HomePage