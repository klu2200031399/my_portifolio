import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Award, GraduationCap, Briefcase, Code, User } from 'lucide-react';

function App() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      credlyLink: "https://www.credly.com/org/amazon-web-services"
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      credlyLink: "https://www.credly.com/org/google"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      credlyLink: "https://www.credly.com/org/microsoft"
    }
  ];

  const projects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system using Raspberry Pi and React",
      tech: ["React", "Node.js", "Python", "IoT"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=300&fit=crop"
    },
    {
      title: "AI Image Recognition",
      description: "Deep learning model for image classification using TensorFlow",
      tech: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop"
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting system using Ethereum smart contracts",
      tech: ["Solidity", "Web3.js", "React"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      icon: "🎨"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "FastAPI"],
      icon: "⚙️"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Git", "CI/CD"],
      icon: "☁️"
    },
    {
      category: "Data & AI",
      items: ["TensorFlow", "PyTorch", "SQL", "pandas"],
      icon: "🤖"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <div className="flex gap-8">
              {["about", "skills", "projects", "education", "certifications"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content with padding for fixed nav */}
      <div className="pt-20 relative z-10">
        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <motion.h2 
                className="text-4xl font-bold mb-6 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <User className="w-8 h-8" /> K.YOGEENDRA
              </motion.h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm a passionate Computer Science student with a keen interest in artificial intelligence, 
                cloud computing, and full-stack development. My goal is to leverage technology to create 
                innovative solutions that make a positive impact on society.
              </p>
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="mailto:contact@example.com"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                alt="Profile" 
                className="rounded-full w-64 h-64 mx-auto object-cover shadow-xl relative"
              />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-8 h-8" /> Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:bg-gray-800 transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-4xl font-bold mb-12 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-8 h-8" /> Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-4 h-4" /> View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <motion.section 
          id="education"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="w-8 h-8" /> Education
          </motion.h2>
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
            }}
          >
            <h3 className="text-2xl font-bold">Bachelor of Computer Science</h3>
            <p className="text-gray-300">Expected Graduation: 2025</p>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <section id="certifications" className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-4xl font-bold mb-8 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-8 h-8" /> Certifications
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.credlyLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-300 mb-4">{cert.issuer}</p>
                <motion.div 
                  className="flex items-center text-blue-400 gap-2"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink className="w-4 h-4" /> View Certificate
                </motion.div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;