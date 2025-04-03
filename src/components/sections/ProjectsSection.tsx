
import { useState } from "react";
import { Code, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  details: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  
  const projects: Project[] = [
    {
      id: "otp-verifier",
      title: "OTP Verifier using GUI",
      description: "A secure OTP validation system built with Python and Tkinter.",
      technologies: ["Python", "Tkinter"],
      year: "2023",
      details: [
        "Implemented secure OTP validation logic, comparing user-entered OTP with a pre-generated OTP.",
        "Developed a Python-based OTP verification system using Tkinter for a user-friendly GUI.",
        "Integrated validation mechanisms to display messages: \"OTP DOES NOT MATCH\" for incorrect OTPs and \"OTP VERIFIED SUCCESSFULLY\" for correct OTPs."
      ],
      githubLink: "https://github.com"
    },
    {
      id: "password-tester",
      title: "Password Strength Tester",
      description: "A password security evaluator developed in C Programming.",
      technologies: ["C Programming"],
      year: "2024",
      details: [
        "Developed a Password Strength Tester using C, which evaluates password security based on length and character composition.",
        "Implemented conditional checks to classify passwords as Weak, Low, Moderate, or Strong based on predefined security criteria."
      ],
      githubLink: "https://github.com"
    },
    {
      id: "vote-system",
      title: "Efficient Vote Management System",
      description: "A stack-based voting system with real-time vote counting.",
      technologies: ["C Programming"],
      year: "2024",
      details: [
        "Developed a stack-based voting system in C to manage candidates and their votes efficiently, demonstrating solid understanding of data structures.",
        "Implemented vote counting and candidate management logic, allowing users to cast votes and view real-time results using a simple console interface.",
        "Utilized stack operations (push/pop) to store and retrieve candidate details, ensuring efficient data manipulation and retrieval.",
        "Enhanced problem-solving skills by designing a structured solution for managing dynamic voting processes and displaying sorted results."
      ],
      githubLink: "https://github.com"
    }
  ];
  
  return (
    <section id="projects" className="section-container bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading text-center">Projects</h2>
        
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className={`card-hover overflow-hidden ${expandedId === project.id ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div className="bg-primary/10 p-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/20 rounded-full">{project.year}</span>
                    <button 
                      onClick={() => toggleExpand(project.id)}
                      className="text-primary hover:text-primary/80"
                      aria-label={expandedId === project.id ? "Collapse project" : "Expand project"}
                    >
                      <Code className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {expandedId === project.id ? (
                    <div className="animate-fade-in">
                      <p className="mb-4">{project.description}</p>
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {project.details.map((detail, index) => (
                            <li key={index} className="text-sm text-muted-foreground">{detail}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 mt-4">
                        {project.githubLink && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bounce-on-hover"
                            asChild
                          >
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.demoLink && (
                          <Button 
                            size="sm" 
                            className="bounce-on-hover"
                            asChild
                          >
                            <a 
                              href={project.demoLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ArrowUpRight className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="card-hover h-full overflow-hidden">
                    <div className="bg-primary/10 p-4 flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                      <span className="text-xs px-2 py-1 bg-primary/20 rounded-full">{project.year}</span>
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {project.details.map((detail, index) => (
                            <li key={index} className="text-xs text-muted-foreground">{detail}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 mt-4">
                        {project.githubLink && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bounce-on-hover"
                            asChild
                          >
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.demoLink && (
                          <Button 
                            size="sm" 
                            className="bounce-on-hover"
                            asChild
                          >
                            <a 
                              href={project.demoLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ArrowUpRight className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
