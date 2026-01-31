"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Video, Upload, Play, Pause, Download, Settings, Sparkles } from "lucide-react"
import Link from "next/link"
import MockupPreview from "@/components/editor/MockupPreview"
import Timeline from "@/components/editor/Timeline"
import PropertiesPanel from "@/components/editor/PropertiesPanel"
import UploadDialog from "@/components/editor/UploadDialog"

export default function EditorPage() {
  const [showUpload, setShowUpload] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <nav className="border-b border-gray-800 bg-gray-900">
        <div className="flex justify-between items-center h-14 px-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Video className="h-6 w-6 text-indigo-400" />
              <span className="font-bold text-white">ScreenCraft Studio</span>
            </Link>
            <span className="text-gray-400 text-sm">Untitled Project</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-gray-900 flex items-center justify-center p-8">
            {showUpload ? (
              <div className="w-full max-w-2xl">
                <UploadDialog onClose={() => setShowUpload(false)} />
              </div>
            ) : (
              <>
                <MockupPreview />
              </>
            )}
          </div>

          <div className="h-64 bg-gray-900 border-t border-gray-800">
            <Timeline />
          </div>
        </div>

        <div className="w-80 bg-gray-900 border-l border-gray-800 overflow-y-auto">
          <PropertiesPanel />
        </div>
      </div>

      {!showUpload && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="bg-gray-800 rounded-2xl p-12 shadow-2xl border border-gray-700">
            <Upload className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Upload Your Screen Recording</h2>
            <p className="text-gray-400 mb-6">Drag and drop or click to select a video file</p>
            <Button onClick={() => setShowUpload(true)} className="bg-indigo-600 hover:bg-indigo-700">
              <Upload className="h-4 w-4 mr-2" />
              Choose File
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
