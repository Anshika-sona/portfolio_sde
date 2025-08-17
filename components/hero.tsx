"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Brain, Code2 } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* AI-themed icons */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-full glow-animation">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <div className="p-3 bg-secondary/10 rounded-full glow-animation" style={{ animationDelay: "0.5s" }}>
              <Code2 className="h-8 w-8 text-secondary" />
            </div>
            <div className="p-3 bg-accent/10 rounded-full glow-animation" style={{ animationDelay: "1s" }}>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Anshika
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-4">
            Software Engineer at <span className="text-primary font-semibold">PayPal</span> • Bangalore, India
          </div>

          <div className="text-lg md:text-xl text-muted-foreground mb-2">
            AI-driven developer specializing in fintech solutions, cloud infrastructure, and intelligent automation.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3 glow-animation" onClick={scrollToAbout}>
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
              <a href="mailto:anshikaraj1720@gmail.com">Get In Touch</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">900+</div>
              <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">8.8</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">40%</div>
              <div className="text-sm text-muted-foreground">Deployment Time Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground">Faster Onboarding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
