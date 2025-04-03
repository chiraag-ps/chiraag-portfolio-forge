
import { useState } from "react";
import { School, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  gpa?: string;
  courses?: string[];
  icon: React.ReactNode;
}

const EducationSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const educationData: EducationItem[] = [
    {
      id: 1,
      institution: "RV Institute of Technology and Management",
      degree: "B.Tech in Information Science",
      duration: "2023 - Present",
      description: "Currently pursuing my Bachelor's degree with a focus on information science and technology.",
      gpa: "7.4 CGPA",
      courses: ["Data Structures", "Designing Algorithms", "Database Management Systems", "Operating Systems"],
      icon: <School className="h-10 w-10 text-primary" />
    },
    {
      id: 2,
      institution: "Sri Kumaran's PU College",
      degree: "Pre-University Education",
      duration: "2021 - 2023",
      description: "Completed my pre-university education with a focus on science and mathematics.",
      icon: <BookOpen className="h-10 w-10 text-primary" />
    },
    {
      id: K3,
      institution: "Sri Kumaran's Children Home",
      degree: "High School Education",
      duration: "Until 2021",
      description: "Completed my high school education with a strong foundation in science and mathematics.",
      icon: <Calendar className="h-10 w-10 text-primary" />
    }
  ];
  
  return (
    <section id="education" className="section-container bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading text-center">Education</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          <div className="space-y-8">
            {educationData.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Timeline Icon */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full ${activeId === item.id ? 'bg-primary' : 'bg-primary/30'} flex items-center justify-center z-10 transition-colors duration-300`}>
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  <Card 
                    className={`w-full md:w-[calc(100%-2rem)] card-hover ${activeId === item.id ? 'border-primary/50 shadow-md' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="bg-primary/10 p-3 rounded-full">
                          {item.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary">
                            {item.institution}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <p className="text-base font-medium">{item.degree}</p>
                            <span className="hidden sm:block text-muted-foreground">•</span>
                            <p className="text-sm text-muted-foreground">{item.duration}</p>
                          </div>
                          
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                          
                          {item.gpa && (
                            <p className="text-sm font-medium">
                              GPA: <span className="text-primary">{item.gpa}</span>
                            </p>
                          )}
                          
                          {item.courses && (
                            <div className="mt-3">
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <button className="text-sm text-primary hover:text-primary/80 underline">
                                    View Relevant Courses
                                  </button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                  <h4 className="text-sm font-semibold mb-2">Relevant Courses:</h4>
                                  <ul className="list-disc list-inside space-y-1 text-sm">
                                    {item.courses.map((course, index) => (
                                      <li key={index}>{course}</li>
                                    ))}
                                  </ul>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
