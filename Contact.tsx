
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to secure your digital assets? Let's discuss how I can help strengthen your cybersecurity posture.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:t.mohamed8242@gmail.com" 
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      t.mohamed8242@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a 
                      href="tel:01211170071" 
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      01211170071
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">8 Fahmy Wesa St., Loran, Alexandria</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <Button 
                    asChild
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <a href="https://www.linkedin.com/in/mohamed-taha-087a63321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    asChild
                    size="sm"
                    className="bg-blue-800 hover:bg-blue-900"
                  >
                    <a href="https://www.facebook.com/share/16ojZxuBwh/" target="_blank" rel="noopener noreferrer">
                      <Facebook size={16} className="mr-2" />
                      Facebook
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gray-700 border-gray-600">
              <h3 className="text-2xl font-semibold text-white mb-6">Professional Services</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-400">Penetration Testing</h4>
                  <p className="text-gray-300 text-sm">Comprehensive security assessments and vulnerability testing</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-400">Web Development</h4>
                  <p className="text-gray-300 text-sm">Secure web applications and e-commerce platforms</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-400">Security Consulting</h4>
                  <p className="text-gray-300 text-sm">Risk assessment and security strategy development</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-400">System Development</h4>
                  <p className="text-gray-300 text-sm">CRM and ERP systems with security best practices</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
