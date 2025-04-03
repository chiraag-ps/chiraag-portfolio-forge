
import { useState } from "react";
import { FileDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  
  const toggleFunFact = () => {
    setShowFunFact(!showFunFact);
  };
  
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden border-4 border-primary/30 shadow-xl">
                <img 
                  src="/lovable-uploads/23488115-2a60-4a14-8e69-29bd99063f1d.png" 
                  alt="Chiraag PS" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl"></div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <Card className="glass">
              <CardContent className="p-6">
                <p className="mb-4">
                  I'm Chiraag PS, an Information Science Engineering student at RV Institute of Technology and Management. 
                  I'm passionate about software development, problem-solving, and building innovative solutions.
                </p>
                <p className="mb-4">
                  My goal is to leverage my programming skills in C, C++, Python, and Java to develop efficient and creative solutions 
                  to real-world problems. I'm particularly interested in software development and data structures.
                </p>
                
                <div 
                  className="p-4 my-4 bg-primary/10 rounded-lg relative cursor-pointer easter-egg"
                  onClick={toggleFunFact}
                >
                  <p className="text-sm font-medium">
                    {showFunFact 
                      ? "I can solve a Rubik's cube in under 2 minutes and love experimenting with new programming languages in my free time!" 
                      : "Click here for a fun fact about me!"}
                  </p>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping-slow"></div>
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button 
                    className="bounce-on-hover" 
                    asChild
                  >
                    <a href="/resume.pdf" download="Chiraag_PS_Resume.pdf">
                      <FileDownIcon className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
