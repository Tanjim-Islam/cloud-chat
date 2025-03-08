"use client"

import { useState } from "react"
import { AlertCircle, X, FileText, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { TiWeatherCloudy } from "react-icons/ti"
import Image from "next/image"

interface MainContentProps {
  sidebarExpanded: boolean
}

export default function MainContent({ sidebarExpanded }: MainContentProps) {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "Report_file.pdf", type: "pdf", forceOCR: false },
    { name: "Article.docs", type: "docs", forceOCR: false },
  ])

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const toggleForceOCR = (index: number) => {
    setUploadedFiles(uploadedFiles.map((file, i) => (i === index ? { ...file, forceOCR: !file.forceOCR } : file)))
  }

  return (
    <div className={cn("flex-1 transition-all duration-300 ease-in-out", sidebarExpanded ? "ml-0 mb-4 mt-4 mr-8" : "ml-0 mb-4 mt-4 mr-8")}>
      <div className="h-full bg-[#2B2B2B] rounded-2xl p-6 relative overflow-auto">
        {/* Subtle dot pattern background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none dot-pattern-bg"
        />

        {/* Web version notice */}
        <div className="flex items-center justify-center mb-8 bg-[#242424] py-2 px-4 rounded-full w-fit mx-auto">
          <AlertCircle className="text-yellow-500 mr-2" size={18} />
          <p className="text-sm">
            The web version does not display local chats. To access all features, please{" "}
            <span className="text-yellow-500 hover:underline cursor-pointer">install the app.</span>
          </p>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
            <span>Add Files to</span>
            <div className="ml-3 flex items-center">
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center mr-2 -rotate-6 border border-gray-700">
                <div className="relative">
                  <TiWeatherCloudy className="w-10 h-10" style={{ color: 'transparent' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0047AB" />
                          <stop offset="60%" stopColor="#4682B4" />
                          <stop offset="100%" stopColor="#B0E2FF" />
                        </linearGradient>
                      </defs>
                      <path d="M17 19h-11c-2.206 0-4-1.794-4-4 0-1.861 1.277-3.429 3.001-3.874l-.001-.126c0-3.309 2.691-6 6-6 2.587 0 4.824 1.638 5.65 4.015 2.942-.246 5.35 2.113 5.35 4.985 0 2.757-2.243 5-5 5zm-11.095-6.006c-1.008.006-1.905.903-1.905 2.006s.897 2 2 2h11c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.243 0-.5.041-.81.13l-1.075.307-.186-1.103c-.325-1.932-1.977-3.334-3.929-3.334-2.206 0-4 1.794-4 4 0 .272.027.545.082.811l.244 1.199-1.421-.016z" fill="url(#cloudGradient)" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-white">Cloud Chat</span>
            </div>
          </h1>
          <p className="text-gray-400 mb-1">
            Your files will not be stored on our servers and no AI models will be trained.
          </p>
          <p>
            <span className="text-yellow-500">Supported File Types: .docx, .pdf, .epub, and many text filetypes</span>
          </p>
        </div>

        {/* Add more vertical space */}
        <div className="mb-20"></div>

        {/* File upload options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Drag & drop */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 flex items-center cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#2B2B2B] flex items-center justify-center mr-4">
              <Image
                src="/drop.png"
                alt="Drop"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm">
                Drag & drop local files here, <br />
                or click to select
              </p>
            </div>
          </div>

          {/* Enter URL */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6">
            <p className="text-sm mb-3">Enter in a public URL:</p>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-[#2B2B2B] flex items-center justify-center mr-2">
                <Image
                  src="/url.png"
                  alt="URL"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="https://example.com/file.pdf"
                  className="w-full bg-[#2B2B2B] border border-[#3a3a3a] rounded-full px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-20"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-[#3a3a3a] hover:bg-[#444444] text-white px-4 py-2 rounded-full text-sm transition-colors mr-0.5 my-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dropbox */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 flex items-center cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#2B2B2B] flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5L7 9.5L12 12.5L7 15.5L2 12.5L7 9.5L2 6.5L7 3.5L12 6.5Z" fill="#0061FF" />
                <path d="M12 6.5L17 3.5L22 6.5L17 9.5L12 6.5Z" fill="#0061FF" />
                <path d="M12 12.5L17 9.5L22 12.5L17 15.5L12 12.5Z" fill="#0061FF" />
                <path d="M9.5 17.5L12 16L14.5 17.5L12 19L9.5 17.5Z" fill="#0061FF" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Add files from Dropbox</p>
            </div>
          </div>

          {/* Google Drive */}
          <div className="bg-[#1E1E1E] rounded-2xl p-6 flex items-center cursor-pointer hover:bg-[#252525] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#2B2B2B] flex items-center justify-center mr-4">
              <Image
                src="/drive.png"
                alt="Google Drive"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm">Add files from Google Drive</p>
            </div>
          </div>
        </div>

        {/* Uploaded files */}
        {uploadedFiles.length > 0 && (
          <div className="bg-[#1A1A1A] rounded-full p-4 mb-8">
            <div className="flex flex-wrap gap-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center bg-[#242424] rounded-full px-3 py-2">
                  <div className="w-6 h-6 rounded-md bg-[#2B2B2B] flex items-center justify-center mr-2">
                    <FileText size={14} className={file.type === "pdf" ? "text-red-500" : "text-blue-500"} />
                  </div>
                  <span className="text-sm text-gray-300 mr-3">{file.name}</span>
                  <div className="flex items-center mr-2">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        id={`ocr-${index}`}
                        checked={file.forceOCR}
                        onChange={() => toggleForceOCR(index)}
                        className="peer appearance-none h-4 w-4 rounded-sm border border-gray-500 bg-transparent checked:border-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                      />
                      <svg
                        className="absolute left-0 top-0 h-4 w-4 text-gray-500 opacity-0 peer-checked:opacity-100 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <label htmlFor={`ocr-${index}`} className="text-xs text-gray-400 ml-1 flex items-center">
                      Force OCR
                      <HelpCircle size={14} className="ml-2 fill-gray-600 text-gray-800" />
                    </label>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="ml-2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#3a3a3a] transition-colors"
                    aria-label="Remove file"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add more vertical space */}
        <div className="mb-12"></div>

        {/* Start buttons */}
        <div className="flex justify-center items-center gap-4 mt-28">
          <button className="w-[250px] h-[60px] shadow-[inset_0_0_0_1px_#FF8C00] text-white px-6 py-3 rounded-full bg-transparent hover:bg-[#FF8C00] transition duration-200">
            Start
          </button>
          <span className="text-gray-500">or</span>
          <div className="flex items-center">
            <button className="w-[250px] h-[60px] bg-gradient-to-r from-[#FFB938] to-[#FF8C00] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-200 flex items-center justify-center">
              <Image
                src="/ai.png"
                alt="AI"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              <span>Start with Deep Dive</span>
            </button>
            <div className="relative inline-block">
              <HelpCircle 
                size={16} 
                className="ml-2 fill-white text-[#0a0702] cursor-pointer" 
                data-component-name="_c" 
                onMouseEnter={(e) => {
                  const tooltip = document.createElement('div');
                  tooltip.className = 'absolute z-50 top-0 left-full ml-2 p-3 w-72 bg-[#1A1A1A] text-sm text-white rounded-2xl shadow-lg';
                  tooltip.innerHTML = 'Deep Dive processes documents section by section for "unlimited" context, enabling complete answers. Run once per chat to unlock Table Al and Prompt Loops';
                  tooltip.id = 'help-tooltip';
                  e.currentTarget.parentNode?.appendChild(tooltip);
                }}
                onMouseLeave={() => {
                  const tooltip = document.getElementById('help-tooltip');
                  if (tooltip) tooltip.remove();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
