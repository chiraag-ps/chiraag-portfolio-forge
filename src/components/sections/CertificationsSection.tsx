
import { Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "certification" | "course";
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      id: "data-structures",
      title: "Data Structures in C++",
      issuer: "SCALER",
      date: "October 2024",
      type: "certification"
    },
    {
      id: "java",
      title: "Deep Dive in Core Java Programming",
      issuer: "Udemy",
      date: "2025",
      type: "course"
    }
  ];
  
  return (
    <section id="certifications" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading text-center">Certifications & Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="card-hover overflow-hidden border-transparent group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {cert.type === "certification" 
                      ? <Award className="h-8 w-8 text-primary" /> 
                      : <BookOpen className="h-8 w-8 text-primary" />
                    }
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                    
                    <div className="mt-4">
                      <span className="inline-block text-xs px-3 py-1 bg-primary/10 rounded-full">
                        {cert.type === "certification" ? "Certification" : "Course"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
