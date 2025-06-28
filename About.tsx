
import { User, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-gray-700 border-gray-600">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-green-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Professional Profile</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Penetration Tester with 4 years of experience conducting security assessments and penetration 
              testing. Skilled in discovering and patching vulnerabilities, and providing detailed reports. 
              Passionate about cybersecurity and committed to helping organizations strengthen their security posture.
            </p>
          </Card>
          
          <Card className="p-8 bg-gray-700 border-gray-600">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-green-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-green-400">Bachelor's Degree</h4>
                <p className="text-gray-300">Computer and Data Science</p>
                <p className="text-gray-400">Alexandria University (2020-2024)</p>
                <p className="text-sm text-gray-400">
                  Focus on Cyber Security, web and network penetration testing
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
