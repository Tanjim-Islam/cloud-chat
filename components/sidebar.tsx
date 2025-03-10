"use client"
import { Search, Settings, Plus, MessageSquarePlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"
import Image from "next/image"

interface SidebarProps {
  expanded: boolean
  toggleSidebar: () => void
}

export default function Sidebar({ expanded, toggleSidebar }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-[#242424] transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-16",
      )}
    >
      {expanded ? (
        // Expanded header
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Socrates Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-semibold text-white">socrates</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md hover:bg-[#333333] transition-colors" aria-label="Search">
              <Search size={20} className="text-gray-400" />
            </button>
            <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-[#333333] transition-colors" aria-label="Collapse sidebar">
              <GoSidebarCollapse size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      ) : (
        // Collapsed vertical icons
        <div className="flex flex-col items-center">
          <div className="p-4">
            <Image
              src="/logo.png"
              alt="Socrates Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>
          <button onClick={toggleSidebar} className="p-2 mb-2 rounded-md hover:bg-[#333333] transition-colors" aria-label="Expand sidebar">
            <GoSidebarExpand size={20} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-md hover:bg-[#333333] transition-colors" aria-label="Search">
            <Search size={20} className="text-gray-400" />
          </button>
        </div>
      )}

      {expanded ? (
        <div className="mt-6 px-4 space-y-2">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 shadow-[inset_0_0_0_1px_#3a3a3a] text-white rounded-3xl bg-transparent hover:bg-[#3a3a3a] transition duration-200">
            <Plus size={18} />
            <span>Add folder</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#333333] hover:bg-[#3a3a3a] rounded-3xl transition-colors">
            <MessageSquarePlus size={18} />
            <span>Create chat</span>
          </button>
        </div>
      ) : (
        <div className="flex-1" /> // Big vertical gap
      )}

      <div className="mt-auto flex flex-col items-center">
        {!expanded && (
          <>
            <button className="p-2 mb-4 w-8 h-8 bg-[#FF8C00] rounded-full flex items-center justify-center" aria-label="Upgrade">
              <span className="text-xs">↑</span>
            </button>
            <button className="p-2 mb-4" aria-label="Flow AI Templates">
              <Image 
                src="/flow.png" 
                alt="Flow"
                width={40}
                height={40}
              />
            </button>
          </>
        )}

        {expanded ? (
          <div className="w-full px-4 mb-4">
            <div className="p-4 bg-[#2B2B2B] rounded-2xl">
              <h3 className="text-sm font-medium mb-2">Upgrade to Premium</h3>
              <p className="text-xs text-gray-400 mb-3">Make the most of all features!</p>
              <button className="w-full py-2 px-4 shadow-[inset_0_0_0_1px_#FF8C00] text-white rounded-3xl bg-transparent hover:bg-[#FF8C00] transition duration-200">
                Upgrade plan
              </button>
            </div>

            <div className="mb-4"></div>

            <button className="w-full flex items-center gap-2 py-2 hover:bg-[#333333] rounded-3xl transition-colors">
              <Image
                src="/flow.png"
                alt="Flow"
                width={32}
                height={32}
                className="w-8 h-8 bg-[#333333] rounded-full"
              />
              <span>Flow AI Templates</span>
            </button>
          </div>
        ) : null}

        <div className={cn("flex items-center", expanded ? "w-full px-4 mb-4" : "flex-col mb-4")}>
          <div className="w-10 h-10 rounded-full bg-gray-500 flex-shrink-0 overflow-hidden">
            <Image 
              src="/placeholder-user.png" 
              alt="User Profile" 
              width={40}
              height={40}
              className="w-full h-full object-cover" 
            />
          </div>

          {expanded && (
            <div className="ml-3">
              <p className="text-sm font-medium">Jessica Mills</p>
            </div>
          )}

          <button className={cn("p-2 rounded-md hover:bg-[#333333] transition-colors", expanded ? "ml-auto" : "mt-4")} aria-label="Settings">
            <Settings size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
