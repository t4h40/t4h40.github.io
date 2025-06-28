
import { ExternalLink, Shield, Bug, Database, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Lead Achievers Platform",
      description: "Comprehensive business platform built with modern web technologies",
      url: "https://www.lead-achievers.com",
      icon: Globe,
      tags: ["Web Development", "Business Platform", "Full-Stack"],
      type: "website"
    },
    {
      title: "Vision Egypt Shop",
      description: "E-commerce platform with advanced features and secure payment integration",
      url: "https://www.visioneg.shop",
      icon: Globe,
      tags: ["E-commerce", "Payment Gateway", "Security"],
      type: "website"
    },
    {
      title: "Vodafone RCE Vulnerability",
      description: "Discovered critical Remote Code Execution vulnerability in Vodafone's infrastructure",
      icon: Bug,
      tags: ["Security Research", "RCE", "Critical Vulnerability"],
      type: "security",
      highlight: true
    },
    {
      title: "Google Fiber RCE Discovery",
      description: "Identified and reported Remote Code Execution vulnerability in Google Fiber services",
      icon: Bug,
      tags: ["Vulnerability Research", "RCE", "Google"],
      type: "security",
      highlight: true
    },
    {
      title: "SQL Injection Detection Tool",
      description: "Developed comprehensive tools to detect SQL injection vulnerabilities in web applications",
      icon: Shield,
      tags: ["Security Tools", "SQL Injection", "Web Security"],
      type: "security"
    },
    {
      title: "Malware Detection System",
      description: "Machine learning-based system for identifying and classifying malware using behavioral patterns",
      icon: Shield,
      tags: ["Machine Learning", "Malware Analysis", "AI"],
      type: "security"
    },
    {
      title: "CRM Management Systems",
      description: "Built multiple Customer Relationship Management systems for various businesses",
      icon: Database,
      tags: ["CRM", "Business Automation", "Database"],
      type: "development"
    },
    {
      title: "ERP System Development",
      description: "Worked on Enterprise Resource Planning systems for large-scale business operations",
      icon: Database,
      tags: ["ERP", "Enterprise", "System Integration"],
      type: "development"
    }
  ];

  const getProjectColor = (type: string, highlight?: boolean) => {
    if (highlight) return "border-red-400 bg-red-900/20";
    switch (type) {
      case "security": return "border-green-400 bg-green-900/20";
      case "website": return "border-blue-400 bg-blue-900/20";
      case "development": return "border-purple-400 bg-purple-900/20";
      default: return "border-gray-600 bg-gray-800";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Portfolio & Achievements</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my work in cybersecurity research, web development, and system architecture
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 transition-all duration-300 hover-scale ${getProjectColor(project.type, project.highlight)}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <project.icon 
                  className={`${
                    project.highlight ? 'text-red-400' : 
                    project.type === 'security' ? 'text-green-400' :
                    project.type === 'website' ? 'text-blue-400' :
                    'text-purple-400'
                  }`} 
                  size={24} 
                />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.highlight && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    Critical
                  </span>
                )}
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.url && (
                <Button 
                  asChild
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Visit Site
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
