import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Video, Sparkles, Zap, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Video className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl">ScreenCraft Studio</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Get Started Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Screen Recordings
              <br />
              <span className="text-indigo-600">Into Stunning 3D Videos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upload a screen recording, add professional 3D mockups, edit with AI assistance, 
              and export polished videos in minutes. No design skills required.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg">
                  Start Creating Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 3 projects free
            </p>
          </div>

          <div className="mt-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <Video className="h-20 w-20 text-white opacity-50" />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to create stunning product videos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Video className="h-6 w-6" />}
              title="3D Mockup Generator"
              description="Transform your screen recordings into professional 3D device mockups with iPhone, MacBook, and browser frames."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="AI-Powered Editing"
              description="Chat with AI to edit your videos. Just say what you want and watch it happen instantly."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Lightning Fast"
              description="From upload to export in under 10 minutes. No complicated software to learn."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Browser-Based"
              description="Works entirely in your browser. No downloads, no installations required."
            />
            <FeatureCard
              icon={<Video className="h-6 w-6" />}
              title="Professional Templates"
              description="Start with pre-built templates for Product Hunt, App Store, and social media."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Auto Captions"
              description="AI-generated captions with multiple styles. Perfect for social media."
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to create your first video?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators making professional videos in minutes
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>&copy; 2026 ScreenCraft Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
