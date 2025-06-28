
import { Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/6726bd3a-7407-4796-bf7f-da0615e1a5e7.png" 
            alt="Mohamed Taha Hussien"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-green-400 shadow-2xl object-cover"
          />
        </div>
        
        <div className="animate-fade-in delay-200">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Mohamed Taha Hussien
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="text-green-400" size={24} />
            <p className="text-xl md:text-2xl text-gray-300">
              Penetration Tester & Security Researcher
            </p>
          </div>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            4+ years of experience in cybersecurity, vulnerability assessment, and web development. 
            Specialized in discovering critical security flaws and building secure applications.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="text-green-400 cursor-pointer" 
            size={32}
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
