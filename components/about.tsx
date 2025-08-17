import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, Target, ExternalLink, Github, Linkedin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Anshika</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging AI and cutting-edge technology to solve real-world problems in fintech and
            beyond. Based in Bangalore, India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Anshika, a Software Engineer at PayPal in Bangalore with a strong background in AI integration, cloud
              infrastructure, and fintech solutions. My journey began at Birla Institute of Technology, where I
              developed a passion for solving complex problems through innovative technology.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              During my internship at Nasdaq in Bangalore, I built reusable Terraform modules that improved deployment
              efficiency by 40% and enabled 3x faster customer onboarding. I believe in the power of AI to transform how
              we work and live, integrating intelligent automation into every aspect of development.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-primary">Key Achievements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🏆 Top 50 Female Coders - HackOn with Amazon Season 4</li>
                <li>🎓 Harvard HPAIR Scholarship'23 recipient</li>
                <li>🥇 Ranked 211th out of 200k in Codechef Starters 97</li>
                <li>💻 900+ DSA problems solved across platforms</li>
                <li>🌟 Grace Hopper Conference Scholarship'22</li>
                <li>☁️ Dan Kohn Diversity Scholarship - KubeCon Europe 2022</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/anshika-604331227/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/Anshika-sona" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">AI Integration</Badge>
              <Badge variant="secondary">Fintech</Badge>
              <Badge variant="secondary">Cloud Infrastructure</Badge>
              <Badge variant="secondary">Full-Stack Development</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech CSE, BIT Mesra</p>
                <p className="text-sm text-muted-foreground">8.8/10 CGPA</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Recognition</h3>
                <p className="text-sm text-muted-foreground">Top 50 Female Coders</p>
                <p className="text-sm text-muted-foreground">HackOn with Amazon</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Leadership</h3>
                <p className="text-sm text-muted-foreground">VP, ACM Student Chapter</p>
                <p className="text-sm text-muted-foreground">Placement Lead</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground">AI-Driven Solutions</p>
                <p className="text-sm text-muted-foreground">Scalable Systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
