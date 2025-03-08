"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import MainContent from "./main-content"

export default function SocratesInterface() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <div className="flex h-screen bg-[#242424] text-white">
      <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
      <MainContent sidebarExpanded={sidebarExpanded} />
    </div>
  )
}

