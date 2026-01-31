"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, Check } from "lucide-react"

interface UploadDialogProps {
  onClose: () => void
}

export default function UploadDialog({ onClose }: UploadDialogProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('video/')) {
        setFile(file)
      } else {
        alert('Please upload a video file')
      }
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFile(files[0])
    }
  }

  const handleUpload = () => {
    if (!file) return

    setUploading(true)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setUploading(false)
            onClose()
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Upload Video</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
            isDragging
              ? 'border-indigo-400 bg-indigo-400/10'
              : 'border-gray-600 hover:border-gray-500'
          }`}
        >
          <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Drop your video here
          </h3>
          <p className="text-gray-400 mb-6">
            or click to browse from your computer
          </p>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Choose File
            </Button>
          </label>
          <p className="text-gray-500 text-sm mt-4">
            Supports MP4, WebM, MOV • Max 2GB
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  {uploading && progress < 100 ? (
                    <Upload className="h-6 w-6 text-white animate-pulse" />
                  ) : (
                    <Check className="h-6 w-6 text-white" />
                  )}
                </div>
                <div>
                  <p className="text-white font-medium">{file.name}</p>
                  <p className="text-gray-400 text-sm">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              {!uploading && (
                <button
                  onClick={() => setFile(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {uploading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Uploading...</span>
                  <span className="text-white">{progress}%</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {!uploading && (
            <div className="flex gap-3">
              <Button
                onClick={handleUpload}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
              >
                Start Processing
              </Button>
              <Button
                onClick={() => setFile(null)}
                variant="outline"
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
