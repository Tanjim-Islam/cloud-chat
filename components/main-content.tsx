"use client"

import { useState } from "react"
import { AlertCircle, X, FileText, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { TiWeatherCloudy } from "react-icons/ti"

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
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Web version notice */}
        <div className="flex items-center justify-center mb-8 bg-[#242424] py-2 px-4 rounded-2xl">
          <AlertCircle className="text-yellow-500 mr-2" size={18} />
          <p className="text-sm">
            The web version does not display local chats. To access all features, please{" "}
            <span className="text-yellow-500 hover:underline cursor-pointer">install the app</span>.
          </p>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
            <span>Add Files to</span>
            <div className="ml-3 flex items-center">
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center mr-2 -rotate-6 border border-gray-700">
                <TiWeatherCloudy className="w-10 h-10 text-blue-700" />
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
              <img
                src="/drop.png"
                alt="Drop"
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
                <img
                  src="/url.png"
                  alt="URL"
                  className="w-5 h-5"
                />
              </div>
              <input
                type="text"
                placeholder="https://example.com/file.pdf"
                className="flex-1 bg-[#2B2B2B] border border-[#3a3a3a] rounded-full px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="ml-2 bg-[#3a3a3a] hover:bg-[#444444] text-white px-4 py-2 rounded-full text-sm transition-colors">
                Add
              </button>
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
              <img
                src="/drive.png"
                alt="Google Drive"
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
                      <HelpCircle size={14} className="ml-1 fill-gray-600 text-gray-800" />
                    </label>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="ml-2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#3a3a3a] transition-colors"
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
              <img
                src="/ai.png"
                alt="AI"
                className="w-5 h-5 mr-2"
              />
              <span>Start with Deep Dive</span>
            </button>
            <HelpCircle size={16} className="ml-2 fill-white text-[#FF8C00] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

