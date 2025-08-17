import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, TrendingUp, Database, Bot } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "predictTRADE",
      description:
        "Advanced machine learning platform for stock trend prediction with real-time analysis capabilities.",
      longDescription:
        "A full-stack web application that leverages advanced machine learning algorithms to predict stock market trends with 15% improved accuracy. Features a streamlined Streamlit interface that enhanced user engagement by 25%.",
      achievements: [
        "15% improvement in stock trend prediction accuracy",
        "25% increase in user engagement",
        "Processed 50,000+ stock records",
        "20% reduction in prediction latency",
      ],
      technologies: ["Python", "Machine Learning", "Streamlit", "Pandas", "TensorFlow", "Real-time Analytics"],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      demoUrl: "#",
      githubUrl: "#",
      category: "AI/ML",
    },
    {
      title: "Indeed Job Scraper",
      description: "Intelligent web scraping solution for automated job market analysis and insights generation.",
      longDescription:
        "Built a robust web scraping project utilizing BeautifulSoup to extract comprehensive data from the Indeed job portal, processing over 1,000 job listings with structured data storage.",
      achievements: [
        "Scraped 1,000+ job listings efficiently",
        "Structured data storage in CSV format",
        "Automated insights generation",
        "Real-time job market analysis",
      ],
      technologies: ["Python", "BeautifulSoup", "Web Scraping", "Data Analysis", "CSV Processing", "Automation"],
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      demoUrl: "#",
      githubUrl: "#",
      category: "Data Engineering",
    },
    {
      title: "AI-Powered Development Workflow",
      description: "Personal AI integration system that enhances daily development productivity and code quality.",
      longDescription:
        "A comprehensive AI integration system I use daily to enhance development workflows, featuring automated code review, intelligent debugging assistance, and productivity optimization tools.",
      achievements: [
        "Automated code review and suggestions",
        "Intelligent debugging assistance",
        "40% faster development cycles",
        "Enhanced code quality metrics",
      ],
      technologies: ["AI APIs", "Python", "VS Code Extensions", "GitHub Actions", "Machine Learning", "Automation"],
      icon: <Bot className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      demoUrl: "#",
      githubUrl: "#",
      category: "AI Integration",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining AI, machine learning, and modern web technologies to solve real-world
            problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white`}>{project.icon}</div>
                    <Badge variant="outline" className="bg-background/80">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-muted">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-muted">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
