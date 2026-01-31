"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Laptop, Globe, Palette } from "lucide-react"

export default function PropertiesPanel() {
  return (
    <div className="p-4 space-y-4">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-sm">Device Frame</CardTitle>
          <CardDescription className="text-gray-400 text-xs">
            Choose a device mockup
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <Smartphone className="h-4 w-4 mr-2" />
            iPhone 15 Pro
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <Laptop className="h-4 w-4 mr-2" />
            MacBook Pro
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <Globe className="h-4 w-4 mr-2" />
            Browser Window
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-sm">Background</CardTitle>
          <CardDescription className="text-gray-400 text-xs">
            Customize the background
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <button className="h-10 w-10 rounded bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white" />
            <button className="h-10 w-10 rounded bg-gradient-to-br from-pink-500 to-orange-500 border-2 border-transparent hover:border-white" />
            <button className="h-10 w-10 rounded bg-gradient-to-br from-green-500 to-blue-500 border-2 border-transparent hover:border-white" />
            <button className="h-10 w-10 rounded bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-transparent hover:border-white" />
          </div>
          <Button
            variant="outline"
            className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            <Palette className="h-4 w-4 mr-2" />
            Custom Color
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-sm">Transform</CardTitle>
          <CardDescription className="text-gray-400 text-xs">
            Adjust position and rotation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <label className="text-white text-xs">Rotation X</label>
            <input
              type="range"
              min="-180"
              max="180"
              defaultValue="0"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-white text-xs">Rotation Y</label>
            <input
              type="range"
              min="-180"
              max="180"
              defaultValue="0"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-white text-xs">Scale</label>
            <input
              type="range"
              min="50"
              max="200"
              defaultValue="100"
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-sm">Effects</CardTitle>
          <CardDescription className="text-gray-400 text-xs">
            Add visual effects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white text-xs">Shadow</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-xs">Reflection</span>
            <input type="checkbox" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
