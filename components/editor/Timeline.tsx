"use client"

import { useEditorStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { useState } from "react"

export default function Timeline() {
  const { currentTime, isPlaying, setCurrentTime, setIsPlaying } = useEditorStore()
  const [duration] = useState(60000)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${minutes}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:bg-gray-800"
          onClick={() => setCurrentTime(0)}
        >
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:bg-gray-800"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:bg-gray-800"
          onClick={() => setCurrentTime(duration)}
        >
          <SkipForward className="h-4 w-4" />
        </Button>
        <span className="text-white text-sm ml-2">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="flex-1 p-4 overflow-x-auto">
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gray-800 rounded-lg">
            <div className="h-full flex items-center px-4">
              <div className="w-full h-16 bg-gray-700 rounded relative">
                <div
                  className="absolute top-0 left-0 h-full bg-indigo-600 rounded"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                <div
                  className="absolute top-0 w-0.5 h-full bg-white cursor-pointer"
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-20 h-16 bg-gray-800 rounded-lg p-2">
            <div className="text-white text-xs mb-1">Video Track</div>
            <div className="h-8 bg-gray-700 rounded flex items-center px-2">
              <div className="text-gray-400 text-xs">Drop clips here</div>
            </div>
          </div>

          <div className="relative mt-2 h-16 bg-gray-800 rounded-lg p-2">
            <div className="text-white text-xs mb-1">Audio Track</div>
            <div className="h-8 bg-gray-700 rounded flex items-center px-2">
              <div className="text-gray-400 text-xs">Drop audio here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
