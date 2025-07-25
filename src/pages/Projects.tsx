import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example-ecommerce.netlify.app",
      githubUrl: "https://github.com/example/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example-tasks.vercel.app",
      githubUrl: "https://github.com/example/task-manager"
    },
    {
      id: 3,
      title: "AI-Powered Chat App",
      description: "Intelligent chat application with AI integration and real-time messaging",
      image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=500&h=300&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Prisma", "TailwindCSS"],
      liveUrl: "https://example-chat.vercel.app",
      githubUrl: "https://github.com/example/ai-chat"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Beautiful weather application with detailed forecasts and interactive maps",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Weather API", "Chart.js", "CSS3"],
      liveUrl: "https://example-weather.netlify.app",
      githubUrl: "https://github.com/example/weather-dashboard"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media management and insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Express", "Redis"],
      liveUrl: "https://example-analytics.vercel.app",
      githubUrl: "https://github.com/example/social-analytics"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with stunning animations and interactions",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Framer Motion", "TailwindCSS", "Netlify"],
      liveUrl: "https://example-portfolio.netlify.app",
      githubUrl: "https://github.com/example/portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my latest work in full-stack development, featuring modern technologies 
            and innovative solutions to real-world problems.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-accent/20 text-accent rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-card rounded-2xl p-8 border border-border/50">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8">
            Have an interesting project in mind? I'd love to help bring your ideas to life 
            with clean, scalable code and beautiful user experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;