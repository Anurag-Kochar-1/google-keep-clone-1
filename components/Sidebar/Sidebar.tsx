import React from 'react'
import {AiOutlineBulb , AiOutlineBell} from "react-icons/ai"
import {BiPencil} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"
import {IoArchiveOutline} from "react-icons/io5"



import { SidebarComponent } from "./Sidebar.styles"

const Sidebar = () => {
  return (
    <SidebarComponent>

      <AiOutlineBulb style={{marginTop: "15px" , fontSize: "25px", cursor: "pointer"}}/>
      <AiOutlineBell  style={{marginTop: "25px" , fontSize: "25px", cursor: "pointer"}}/>
      <BiPencil  style={{marginTop: "25px" , fontSize: "25px", cursor: "pointer"}}/>
      <IoArchiveOutline  style={{marginTop: "25px" , fontSize: "25px", cursor: "pointer"}}/>
      <BsTrash style={{marginTop: "25px" , fontSize: "25px", cursor: "pointer"}}/>

    </SidebarComponent>
  )
}

export default Sidebar