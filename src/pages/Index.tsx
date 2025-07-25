import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Code, Palette, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center">
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
            Roland Ugo
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            FullStack Developer | Building clean and responsive web experiences
          </p>
          
          {/* Feature Icons */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-2 opacity-80">
              <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Clean Code</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <div className="p-3 rounded-full bg-accent/20 border border-accent/30">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Beautiful UI</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Fast Performance</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link to="/projects">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto animate-glow hover:animate-none"
            >
              View My Projects
              <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </Link>
          
          {/* Tech Stack */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Built with modern technologies</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-card border border-border/50 rounded-full">React</span>
              <span className="px-3 py-1 bg-card border border-border/50 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-card border border-border/50 rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-card border border-border/50 rounded-full">TailwindCSS</span>
              <span className="px-3 py-1 bg-card border border-border/50 rounded-full">PostgreSQL</span>
              <span className="px-3 py-1 bg-card border border-border/50 rounded-full">AWS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Index;