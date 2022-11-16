import React from 'react'
import {IoMenuOutline , IoRefreshSharp} from "react-icons/io5"
import {TfiViewList} from "react-icons/tfi"
import {AiOutlineSetting} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import {MdOutlineErrorOutline} from "react-icons/md"
import Image from 'next/image'
// import logo from '../../images/logo.png'
import SearchBar from '../SearchBar/SearchBar'
import { UserAuth } from "../../context/AuthContext"

import { HeaderComponent, 
  Heading, 
  HeaderLeftComponent, 
  HeaderRightComponent, 
  ProfileAvatar } from "../Header/Header.styles"

interface props {
  googleSignIn: () => void
}


const Header = () => {

  const {googleSignIn} = UserAuth()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      alert(error)
    }
  }


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
        
        <MdOutlineErrorOutline onClick={handleGoogleSignIn}/>

        {/* <Image src={"https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"} alt="dp" width={100} height={100} /> */}
      </HeaderRightComponent>

    </HeaderComponent>
  )
}

export default Header