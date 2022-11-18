import React, {useContext , useEffect} from 'react'
import {IoMenuOutline , IoRefreshSharp} from "react-icons/io5"
import {TfiViewList} from "react-icons/tfi"
import {AiOutlineSetting} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import {MdOutlineErrorOutline} from "react-icons/md"
import Image, { StaticImageData } from 'next/image'
import logo from '../../images/logo.png'
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


  

  useEffect(() => {
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

  return (
    <HeaderComponent>

      <HeaderLeftComponent>
        <IoMenuOutline style={{color: "#5F6368" , fontSize: "1.4rem", cursor: "pointer"}} />
        <Image src={logo} alt="logo" width={25} height={35} />
        <Heading> Keep </Heading>
      </HeaderLeftComponent>

      <SearchBar />

      <HeaderRightComponent>
        <IoRefreshSharp style={{fontSize: "20px" , cursor: "pointer"}} />
        <TfiViewList style={{fontSize: "20px" , cursor: "pointer"}} />
        <AiOutlineSetting style={{fontSize: "20px" , cursor: "pointer"}} />
        <TbGridDots style={{fontSize: "20px" , cursor: "pointer"}} />
        
        {userPhotoUrl && <ProfileAvatar src={userPhotoUrl || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" } onClick={() => signOut(auth)} alt="dp" />}
        {!userPhotoUrl && <MdOutlineErrorOutline style={{fontSize: "20px" , cursor: "pointer"}}   />}
      </HeaderRightComponent>

    </HeaderComponent>
  )
}

export default Header