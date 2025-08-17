"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Cloud, Wrench, Brain, Zap } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      color: "text-blue-500",
      skills: [
        { name: "Python", level: 95, description: "Advanced ML/AI development" },
        { name: "Java", level: 90, description: "Enterprise applications" },
        { name: "JavaScript", level: 88, description: "Full-stack development" },
        { name: "C++", level: 85, description: "System programming & DSA" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      color: "text-purple-500",
      skills: [
        { name: "TensorFlow", level: 90, description: "Deep learning models" },
        { name: "Scikit-learn", level: 88, description: "ML algorithms" },
        { name: "Data Analysis", level: 92, description: "Pandas, NumPy" },
        { name: "AI Integration", level: 95, description: "Daily workflow automation" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-green-500",
      skills: [
        { name: "AWS", level: 90, description: "Infrastructure & services" },
        { name: "Azure", level: 85, description: "Cloud deployment" },
        { name: "Terraform", level: 92, description: "Infrastructure as Code" },
        { name: "CI/CD", level: 88, description: "GitLab, GitHub Actions" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "text-orange-500",
      skills: [
        { name: "PostgreSQL", level: 88, description: "Relational databases" },
        { name: "MongoDB", level: 85, description: "NoSQL databases" },
        { name: "Database Design", level: 90, description: "Optimization & scaling" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Zap className="h-6 w-6" />,
      color: "text-yellow-500",
      skills: [
        { name: "React", level: 90, description: "Modern UI development" },
        { name: "Node.js", level: 88, description: "Backend development" },
        { name: "RESTful APIs", level: 92, description: "API design & integration" },
        { name: "HTML/CSS", level: 85, description: "Frontend fundamentals" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      color: "text-red-500",
      skills: [
        { name: "Git", level: 95, description: "Version control" },
        { name: "Linux", level: 88, description: "System administration" },
        { name: "Docker", level: 85, description: "Containerization" },
        { name: "Microservices", level: 87, description: "Distributed systems" },
      ],
    },
  ]

  const achievements = [
    { label: "DSA Problems Solved", value: "900+", description: "LeetCode, GeeksforGeeks, Codeforces" },
    { label: "Deployment Time Reduced", value: "40%", description: "Through Terraform automation" },
    { label: "Customer Onboarding Speed", value: "3x", description: "Faster cloud platform integration" },
    { label: "Prediction Accuracy Improvement", value: "15%", description: "ML model optimization" },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning AI/ML, cloud infrastructure, and modern web technologies.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={category.color}>{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
