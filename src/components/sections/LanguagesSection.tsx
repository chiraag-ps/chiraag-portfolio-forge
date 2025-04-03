
import { Card, CardContent } from "@/components/ui/card";

interface Language {
  name: string;
  level: string;
  flag: string;
}

const LanguagesSection = () => {
  const languages: Language[] = [
    {
      name: "Kannada",
      level: "Native",
      flag: "🇮🇳"
    },
    {
      name: "Hindi",
      level: "Fluent",
      flag: "🇮🇳"
    },
    {
      name: "English",
      level: "Fluent",
      flag: "🇬🇧"
    }
  ];
  
  return (
    <section id="languages" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="subheading text-center mb-8">Languages</h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map((lang) => (
          <Card key={lang.name} className="card-hover w-32 h-32 flex flex-col items-center justify-center easter-egg">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <span className="text-3xl mb-2">{lang.flag}</span>
              <p className="font-medium text-center">{lang.name}</p>
              <p className="text-xs text-muted-foreground">{lang.level}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
