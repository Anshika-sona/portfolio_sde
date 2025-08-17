import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "PayPal",
      role: "Software Engineer",
      period: "Aug 2025 - Present",
      location: "Bangalore, India",
      description:
        "Building scalable fintech solutions and integrating AI-powered features to enhance user experience and payment processing efficiency.",
      achievements: [
        "Developing AI-driven fraud detection systems",
        "Optimizing payment processing workflows",
        "Implementing machine learning models for risk assessment",
        "Contributing to PayPal's next-generation payment platform",
      ],
      technologies: ["Python", "Java", "Machine Learning", "AWS", "Microservices"],
      icon: "💳",
      color: "text-blue-600",
    },
    {
      company: "Nasdaq",
      role: "Software Developer Intern",
      period: "Jan 2025 - July 2025",
      location: "Bangalore, India",
      description:
        "Worked with the Global Cloud team to enhance cloud platform infrastructure and streamline deployment processes.",
      achievements: [
        "Built reusable Terraform modules reducing deployment time by 40%",
        "Enabled 3x faster customer onboarding to cloud platform",
        "Developed CI/CD components for infrastructure testing",
        "Contributed to infrastructure automation on AWS and Azure",
      ],
      technologies: ["Terraform", "AWS", "Azure", "CI/CD", "GitLab", "Infrastructure as Code"],
      icon: "📈",
      color: "text-green-600",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of fintech and cloud infrastructure at industry-leading companies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardHeader className="bg-gradient-to-r from-muted/50 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{exp.role}</CardTitle>
                      <div className="flex items-center gap-2 text-lg text-primary font-semibold">
                        <Building2 className="h-5 w-5" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="text-sm text-muted-foreground">{exp.location}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
