
import { Shield, Code, Database, Search, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Network Security", "Web Application Security", "Vulnerability Assessment", "Penetration Testing", "Risk Management", "Security Tools"]
    },
    {
      title: "Development",
      icon: Code,
      skills: ["HTML, CSS, JavaScript", "PHP", "Web Development", "Mobile App Development", "CRM Systems", "ERP Systems"]
    },
    {
      title: "Investigation",
      icon: Search,
      skills: ["Digital Forensics", "Malware Analysis", "Incident Response", "SQL Injection Detection", "RCE Vulnerabilities", "Security Research"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Teamwork", "Problem-solving", "Risk Assessment", "Technical Writing", "Client Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 hover-scale">
              <div className="text-center mb-6">
                <category.icon className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gray-800 border-gray-700 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="text-green-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Languages</h3>
            </div>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-green-400">Arabic</div>
                <div className="text-gray-300">Native</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-400">English</div>
                <div className="text-gray-300">Professional</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
