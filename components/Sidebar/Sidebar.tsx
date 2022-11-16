import React from 'react'
import {AiOutlineBulb , AiOutlineBell} from "react-icons/ai"
import {BiPencil} from "react-icons/bi"
import {BsTrash} from "react-icons/bS"
import {IoArchiveOutline} from "react-icons/io5"



import { SidebarComponent } from "./Sidebar.styles"

const Sidebar = () => {
  return (
    <SidebarComponent>
      <AiOutlineBulb />
      <AiOutlineBell />
      <BiPencil />
      <IoArchiveOutline />
      <BsTrash/>

    </SidebarComponent>
  )
}

export default Sidebar