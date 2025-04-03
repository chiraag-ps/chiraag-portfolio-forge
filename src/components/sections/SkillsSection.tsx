
import { useState } from "react";
import { Code, Wrench, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("programming");
  
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C", level: 4 },
        { name: "C++", level: 4 },
        { name: "Python", level: 3 },
        { name: "Java", level: 3 },
        { name: "Collection Frameworks", level: 3 }
      ]
    },
    {
      id: "tools",
      title: "Software & Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "MATLAB", level: 3 },
        { name: "TinkerCAD", level: 4 },
        { name: "Figma", level: 3 }
      ]
    },
    {
      id: "soft",
      title: "Soft Skills",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: [
        { name: "Problem-Solving", level: 5 },
        { name: "Teamwork", level: 4 },
        { name: "Communication", level: 4 }
      ]
    }
  ];
  
  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading text-center">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories
            .filter(category => activeCategory === null || category.id === activeCategory)
            .map((category) => (
              <Card key={category.id} className="card-hover overflow-hidden">
                <div className="bg-primary/10 p-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                    {category.icon}
                    {category.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-3 h-3 rounded-full ${
                                  i < skill.level ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                                } transition-all duration-500`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500 animate-pulse"
                            style={{ width: `${skill.level * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
