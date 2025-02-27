import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Server, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Cauã Marques
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 text-center mb-8">
            Full Stack Software Developer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/cauamarquesf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/cauã-marques-658a9b344/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cauamarquesdev@gmail.com" className="hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce" size={32} />
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless, 
              user-centric solutions that drive business success.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines technical excellence with creative problem-solving, 
              ensuring that every project I tackle delivers exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Globe className="mx-auto mb-4 text-blue-500" size={32} />
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Server className="mx-auto mb-4 text-purple-500" size={32} />
              <h3 className="font-semibold">Backend</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Database className="mx-auto mb-4 text-green-500" size={32} />
              <h3 className="font-semibold">Database</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Smartphone className="mx-auto mb-4 text-red-500" size={32} />
              <h3 className="font-semibold">Mobile</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "JavaScript", "TypeScript", "React", "Node.js",
              "Python", "HTML", "CSS", "MongoDB",
              "PostgreSQL", "Redis", "GraphQL", "REST APIs"
            ].map((skill) => (
              <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <Code2 className="mx-auto mb-2 text-blue-500" size={24} />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce Platform",
              description: "A full-stack e-commerce solution with real-time inventory management",
              tech: ["React", "Node.js", "MongoDB"],
              image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Task Management App",
              description: "Collaborative task management tool with real-time updates",
              tech: ["React", "Firebase", "Material-UI"],
              image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Analytics Dashboard",
              description: "Real-time analytics dashboard with data visualization",
              tech: ["Vue.js", "D3.js", "Express"],
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71auto=format&fit=crop&w=800&q=80"
            }
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Cauã Marques. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;