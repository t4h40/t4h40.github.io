
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Current",
      description: [
        "Developed and maintained web applications for various clients across different industries",
        "Created responsive websites using HTML, CSS, JavaScript, jQuery, and PHP",
        "Built comprehensive CRM management systems for business automation",
        "Worked extensively on ERP systems for enterprise resource planning"
      ]
    },
    {
      title: "Freelance Penetration Tester",
      company: "Security Consulting",
      period: "Current",
      description: [
        "Provided vulnerability assessments for small businesses",
        "Conducted comprehensive security testing to detect and fix weaknesses in web applications",
        "Discovered critical RCE vulnerabilities in major platforms including Vodafone and Google Fiber",
        "Delivered detailed security reports with remediation recommendations"
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Freelance",
      period: "Previous",
      description: [
        "Designed, developed, and deployed mobile applications for Android and iOS platforms",
        "Collaborated with cross-functional teams to translate business requirements into functional solutions",
        "Implemented intuitive mobile solutions with focus on user experience"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Professional Experience</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-green-400"></div>
              )}
              
              <Card className="mb-8 p-8 bg-gray-700 border-gray-600 hover:border-green-400 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Briefcase className="text-white" size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-green-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
