import React, {useContext} from 'react'
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
import { signOut } from "firebase/auth"
import { AuthUserDetailsContext } from '../../context/AuthUserDetailsContext'




const Header = () => {
  const content = useContext(AuthUserDetailsContext)


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
        
        <img src={content?.userPhotoUrl as string } onClick={() => signOut(auth)} alt="dp" width={100} height={100} />
      </HeaderRightComponent>

    </HeaderComponent>
  )
}

export default Header