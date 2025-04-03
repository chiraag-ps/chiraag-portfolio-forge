
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${theme === 'dark' 
          ? 'bg-gradient-to-br from-primary/10 via-background to-background' 
          : 'bg-gradient-to-br from-primary/5 via-background to-background'}`}>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <p className="text-sm md:text-base text-primary/80 mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Chiraag PS
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground">
            Information Science Engineering Student
          </h2>
          <p className="text-base md:text-lg max-w-2xl mb-8 text-muted-foreground">
            Passionate about problem-solving and building innovative solutions. 
            Currently pursuing B.Tech in Information Science at RV Institute of Technology and Management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bounce-on-hover" 
              size="lg"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button 
              variant="outline" 
              className="bounce-on-hover" 
              size="lg"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary/80 hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
