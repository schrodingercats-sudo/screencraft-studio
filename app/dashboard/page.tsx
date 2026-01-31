"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Plus, Upload, Clock } from "lucide-react"

export default function DashboardPage() {
  const [projects] = useState([
    {
      id: '1',
      name: 'Product Demo',
      thumbnail: null,
      createdAt: new Date(),
      duration: 45000,
    },
    {
      id: '2',
      name: 'App Showcase',
      thumbnail: null,
      createdAt: new Date(),
      duration: 30000,
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Video className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl">ScreenCraft Studio</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/editor">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Projects</h1>
          <p className="text-gray-600 mt-2">Create and manage your video projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-dashed border-2 hover:border-indigo-400 transition-colors cursor-pointer group">
            <Link href="/editor">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Plus className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg">Create New Project</h3>
                <p className="text-gray-600 text-sm mt-1">Upload a recording or start fresh</p>
              </CardContent>
            </Link>
          </Card>

          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-2">
                  <Upload className="h-6 w-6" />
                </div>
                <CardTitle>Upload a Recording</CardTitle>
                <CardDescription>
                  Upload your screen recording and we&apos;ll help you transform it into a stunning video
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/editor">
                  <Button className="w-full">Upload Video</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-2">
                  <Video className="h-6 w-6" />
                </div>
                <CardTitle>Use a Template</CardTitle>
                <CardDescription>
                  Start with a pre-built template for Product Hunt, App Store, or social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">Browse Templates</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <Link href={`/editor?project=${project.id}`}>
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover rounded-t-lg" />
          ) : (
            <Video className="h-12 w-12 text-gray-400" />
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {formatDuration(project.duration)}
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const sec = seconds % 60
  return `${minutes}:${sec.toString().padStart(2, '0')}`
}
