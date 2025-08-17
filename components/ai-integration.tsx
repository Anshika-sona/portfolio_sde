import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Code, Lightbulb, Workflow, BarChart3 } from "lucide-react"

export function AIIntegration() {
  const aiUseCases = [
    {
      title: "Code Generation & Review",
      description:
        "Using AI-powered tools for automated code generation, intelligent code reviews, and bug detection to enhance development speed and quality.",
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      tools: ["GitHub Copilot", "ChatGPT", "Claude", "Custom AI Models"],
      impact: "50% faster development cycles",
    },
    {
      title: "Intelligent Debugging",
      description:
        "Leveraging AI to identify complex bugs, suggest optimal solutions, and provide context-aware debugging assistance across multiple programming languages.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-500",
      tools: ["AI Debugging Tools", "Error Analysis", "Log Intelligence", "Pattern Recognition"],
      impact: "70% reduction in debugging time",
    },
    {
      title: "Automated Documentation",
      description:
        "AI-driven documentation generation, API documentation automation, and intelligent code commenting for better project maintainability.",
      icon: <Workflow className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      tools: ["Auto-Doc Generators", "API Documentation AI", "Comment Intelligence", "README Automation"],
      impact: "80% faster documentation process",
    },
    {
      title: "Data Analysis & Insights",
      description:
        "Using AI for automated data analysis, pattern recognition in large datasets, and generating actionable insights for business decisions.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      tools: ["Pandas AI", "AutoML", "Data Visualization AI", "Predictive Analytics"],
      impact: "3x faster data processing",
    },
    {
      title: "Learning & Skill Development",
      description:
        "Continuous learning through AI-powered educational tools, personalized learning paths, and staying updated with latest tech trends.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500",
      tools: ["AI Tutors", "Personalized Learning", "Tech News AI", "Skill Assessment"],
      impact: "2x faster skill acquisition",
    },
    {
      title: "Workflow Automation",
      description:
        "Automating repetitive tasks, optimizing development workflows, and creating intelligent CI/CD pipelines with AI-driven decision making.",
      icon: <Bot className="h-8 w-8" />,
      color: "from-red-500 to-pink-500",
      tools: ["Workflow AI", "Task Automation", "Smart CI/CD", "Process Optimization"],
      impact: "60% reduction in manual tasks",
    },
  ]

  return (
    <section id="ai" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">AI in My Daily Workflow</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            How I leverage artificial intelligence to enhance productivity, accelerate development, and deliver superior
            solutions in my daily work as a software engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiUseCases.map((useCase, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="relative pb-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {useCase.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    AI Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tools.map((tool, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-primary">Impact: {useCase.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">AI-First Development Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe AI is not just a tool, but a collaborative partner in software development. By integrating AI
                into every aspect of my workflow—from ideation to deployment—I can focus on solving complex problems
                while AI handles routine tasks, ultimately delivering more innovative and efficient solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  AI-Augmented Development
                </Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2">
                  Intelligent Automation
                </Badge>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                  Data-Driven Decisions
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
