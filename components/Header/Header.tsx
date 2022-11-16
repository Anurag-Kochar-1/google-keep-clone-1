import React, {useContext , useEffect} from 'react'
import {IoMenuOutline , IoRefreshSharp} from "react-icons/io5"
import {TfiViewList} from "react-icons/tfi"
import {AiOutlineSetting} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import {MdOutlineErrorOutline} from "react-icons/md"
import Image from 'next/image'
// import logo from '../../images/logo.png'
import SearchBar from '../SearchBar/SearchBar'

import { HeaderComponent, 
  Heading, 
  HeaderLeftComponent, 
  HeaderRightComponent, 
  ProfileAvatar } from "../Header/Header.styles"

import { auth } from '../../firebaseconfig'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { AuthUserDetailsContext } from '../../context/AuthUserDetailsContext'


import {IAuthUserDetailsContext} from "../../context/AuthUserDetailsContext"



const Header = () => {
  const {userName, userEmail, userPhotoUrl , setUserName , setUserEmail , setUserPhotoUrl , setIsUserLoggedIn} = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext


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

  return (
    <HeaderComponent>

      <HeaderLeftComponent>
        <IoMenuOutline style={{color: "#5F6368" , fontSize: "1.4rem", cursor: "pointer"}} />
        {/* <Image src={logo} alt="logo" width={35} height={45} /> */}
        <Heading> Keep </Heading>
      </HeaderLeftComponent>

      <SearchBar />

      <HeaderRightComponent>
        <IoRefreshSharp />
        <TfiViewList />
        <AiOutlineSetting />
        <TbGridDots />
        
        <img src={userPhotoUrl } onClick={() => signOut(auth)} alt="dp" width={100} height={100} />
      </HeaderRightComponent>

    </HeaderComponent>
  )
}

export default Header