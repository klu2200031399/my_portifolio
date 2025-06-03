import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Award, GraduationCap, Briefcase, Code, User } from 'lucide-react';

function App() {
  const certifications = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      credlyLink: "https://www.credly.com/badges/182169e2-9dc5-473f-aa5f-a228076ba5a1/public_url"
    },
    {
      title: "Multicloud Network Associate",
      issuer: "Aviatrix",
      credlyLink: "https://www.credly.com/badges/922a6be4-bd8e-46a7-b802-72e09335a2df/public_url"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      credlyLink: "https://drive.google.com/file/d/1JKlIVuwq9PsrxjMdhUe9uMqkjg69D1oo/view?usp=sharing"
    }
  ];

  const projects = [
    {
      title: "Student Feedback Management System",
      description: "A comprehensive MERN stack application for managing student feedback, featuring real-time analytics and automated response handling",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop"
    },
    {
      title: "Online Health Consultant",
      description: "Django-based telemedicine platform with video consultations, appointment scheduling, and electronic health records",
      tech: ["Django", "Python", "PostgreSQL", "WebRTC"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop"
    },
    {
      title: "Online Scholarship Management",
      description: "Java Spring Boot application for managing scholarship applications, processing, and disbursement tracking",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop"
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "Java", "C++"],
      icon: "💻"
    },
    {
      category: "Web Technologies",
      items: ["React", "Django", "Spring Boot", "Node.js"],
      icon: "🌐"
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      icon: "🗄️"
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Docker", "AWS", "Azure"],
      icon: "🛠️"
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
                A driven and dynamic Computer Science graduate with a strong penchant for innovation and a flair for fast learning. Equipped with exceptional time management and the ability to adapt swiftly, I thrive in deadline-bound environments. I bring to the table a curious mind, a meticulous work ethic, and a passion for leveraging technology to solve real-world problems.
              </p>
              <div className="flex flex-col gap-6">
                <motion.div 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a 
                    href="https://github.com/klu2200031399" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/yogeendra-kajjam-501388253/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                  href="mailto:yogeendra7675@gmail.com"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://yogeendra-resume.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-6 h-6" />
                </motion.a>
                </motion.div>
               
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
              whileHover={{ scale: 1.05 }}
            >
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-10 animate-pulse" /> */}
              <div className="absolute -inset-1 bg-black rounded-xl blur-md opacity-20 pointer-events-none" />

              <img 
                src="/varma.jpg" 
                alt="Profile" 
                className="rounded-full w-64 h-64 mx-auto object-cover shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_70px_rgba(59,130,246,0.5)] transition-shadow duration-300"
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
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:bg-gray-800 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              >
                <div className="text-4xl mb-4">
                  {skillGroup.icon}
                </div>
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
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]"
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
          <div className="space-y-6">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold text-blue-400">KL University</h3>
              <p className="text-xl text-gray-300 mt-2">Bachelor of Computer Science and Engineering</p>
              <p className="text-gray-400 mt-1">2022 - 2026</p>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold text-blue-400">Krishnaveni Junior College</h3>
              <p className="text-xl text-gray-300 mt-2">Intermediate Education</p>
              <p className="text-gray-400 mt-1">2020 - 2022</p>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold text-blue-400">Jai Bharat High School</h3>
              <p className="text-xl text-gray-300 mt-2">Secondary Education</p>
              <p className="text-gray-400 mt-1">Completed in 2020</p>
            </motion.div>
          </div>
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
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.1)]"
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

        {/* Footer with Copyright */}
        <footer className="container mx-auto px-4 py-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} K.YOGEENDRA. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
