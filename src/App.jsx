import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dev from "../src/assets/images/dev.png"
import myphoto from "../src/assets/images/IMG_0156.jpg"
import shooping from "../src/assets/images/shooping.png"
import weather from "../src/assets/images/weather.png"


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null)
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && 
            scrollPosition >= ref.current.offsetTop && 
            scrollPosition < ref.current.offsetTop + ref.current.offsetHeight) {
          setActiveSection(section);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-[#030712] text-gray-100 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#030712]/90 backdrop-blur-md border-b border-[#1e1e2a] py-4 px-6 fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">
            <span className="animate-pulse">{'<'}</span>MyPortfolio<span className="animate-pulse">{'/>'}</span>
          </h1>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
              {Object.keys(sectionRefs).map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`} 
                    className={`px-3 py-2 rounded-full transition-all ${
                      activeSection === section 
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-white' 
                        : 'hover:bg-[#111827] hover:text-[#0ea5e9]'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" ref={sectionRefs.about} className="min-h-screen flex items-center pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#0ea5e9] rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#8b5cf6] rounded-full filter blur-[120px] opacity-10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Hi, I&apos;m <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">Youssef Hamada</span>
              </h2>
              <h3 className="text-xl sm:text-2xl text-gray-500 mb-6 font-light">Frontend Developer & UI/UX Enthusiast</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                I craft responsive, user-friendly web experiences with modern technologies that balance aesthetics and functionality.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="mailto:yhamada504@gmail.com" className="group relative px-6 py-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-white shadow-lg hover:shadow-[#0ea5e9]/20 transition-all">
                  <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                  <i className="fas fa-envelope mr-2"></i> Contact Me
                </a>
                <a href={`${import.meta.env.BASE_URL}youssef-hamada.docx`} download className="group relative px-6 py-3 overflow-hidden rounded-full border border-[#0ea5e9] text-[#0ea5e9] hover:shadow-[#0ea5e9]/10 hover:shadow-lg transition-all">
                  <span className="absolute top-0 left-0 w-full h-full bg-[#0ea5e9] opacity-0 group-hover:opacity-5 transition-opacity"></span>
                  <i className="fas fa-download mr-2"></i> Download CV
                </a>
              </div>
              <div className="flex justify-center lg:justify-start mt-8 space-x-6">
                <a href="https://github.com/youssefhamada-y" className="text-gray-500 hover:text-[#0ea5e9] text-2xl transition-all hover:scale-110">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/youssef-hamada-99b312222/" className="text-gray-500 hover:text-[#0ea5e9] text-2xl transition-all hover:scale-110">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative bg-[#111827] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group border border-[#1e1e2a]">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden">
                    <img 
                      src={myphoto} 
                      alt="Youssef Hamada" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x400?text=Your+Photo';
                      }}
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] p-4 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <i className="fas fa-code text-white text-2xl"></i>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#0ea5e9]/80 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-laptop-code mr-1"></i> Frontend Developer
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionRefs.skills} className="py-20 px-6 bg-[#111827] relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold relative inline-block">
              My Skills
              <div className="h-1 w-12 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] mx-auto mt-2"></div>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
              { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
              { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
              { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
              { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-teal-500' },
              { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
              { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
              { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: 'text-purple-500' }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#030712] border border-[#1e1e2a] p-6 rounded-xl shadow-md hover:shadow-xl hover:shadow-[#0ea5e9]/5 transition-all text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto bg-[#111827] rounded-full flex items-center justify-center mb-4 group-hover:bg-gradient-to-r from-[#0ea5e9]/10 to-[#8b5cf6]/10 transition-all">
                  <i className={`${skill.icon} ${skill.color} text-3xl`}></i>
                </div>
                <h3 className="font-semibold text-lg text-gray-300">{skill.name}</h3>
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] mx-auto mt-2 group-hover:w-1/2 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionRefs.projects} className="py-20 px-6 bg-[#030712] relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#0ea5e9] rounded-full filter blur-[120px] opacity-5"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-[#8b5cf6] rounded-full filter blur-[120px] opacity-5"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] mx-auto mt-2"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#0ea5e9]/10 transition-all group border border-[#1e1e2a]"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={shooping} 
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x300?text=Project+1";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">E-Commerce Platform</h3>
                <p className="text-gray-500 mb-4">A full-featured online store with React, Node.js and Stripe integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Node.js</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Tailwendcss</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Stripe</span>
                </div>
                <div className="flex justify-between">
                  <a href="https://youssefhamada-y.github.io/shopping/" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </a>
                  <a href="https://github.com/youssefhamada-y/shopping/tree/master" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium flex items-center">
                    <i className="fab fa-github mr-1"></i> View Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#0ea5e9]/10 transition-all group border border-[#1e1e2a]"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={dev} 
                  alt="portfolio"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x300?text=Project+2";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Portfolio</h3>
                <p className="text-gray-500 mb-4">A productivity tool for teams with real-time updates and collaboration features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Javascript</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Html</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Tailwind CSS</span>
                </div>
                <div className="flex justify-between">
                  <a href="https://youssefhamada-y.github.io/portfolio/" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </a>
                  <a href="https://github.com/youssefhamada-y/portfolio" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium flex items-center">
                    <i className="fab fa-github mr-1"></i> View Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#0ea5e9]/10 transition-all group border border-[#1e1e2a]"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={weather} 
                  alt="weather website"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x300?text=Project+3";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Weather Website</h3>
                <p className="text-gray-500 mb-4">A responsive weather website with dark mode and animations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Framer Motion</span>
                  <span className="text-xs bg-[#030712] text-[#0ea5e9] px-2 py-1 rounded-full">Tailwind CSS</span>
                </div>
                <div className="flex justify-between">
                  <a href="https://youssefhamada-y.github.io/assignment-weather/" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </a>
                  <a href="https://github.com/youssefhamada-y/assignment-weather" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium flex items-center">
                    <i className="fab fa-github mr-1"></i> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={sectionRefs.education} className="py-20 bg-[#111827] px-6 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Education & Certifications</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] mx-auto mt-2"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              My academic background and professional development
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              { 
                year: '2021 - 2025', 
                degree: 'Bis helwan University ', 
                school: 'Helwan University Cairo',
                description: 'Focused on web technologies and user interface design. Graduated with honors.'
              },
              { 
                year: '2021 - 2025', 
                degree: 'Associate Degree in Web Development', 
                school: 'Helwan University Cairo',
                description: 'Learned fundamentals of web development and design principles.'
              },
              { 
                year: '2023', 
                degree: 'Advanced React & Front-end development', 
                school: 'Route academy',
                description: 'Mastered advanced concepts in React ecosystem and state management.'
              }
            ].map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-full flex items-center justify-center text-white shadow-lg">
                    <i className="fas fa-graduation-cap text-xl"></i>
                  </div>
                  <div className="h-full w-0.5 bg-[#1e1e2a] mx-auto mt-2"></div>
                </div>
                <div className="bg-[#030712] p-6 rounded-xl shadow-md flex-1 hover:shadow-lg hover:shadow-[#0ea5e9]/5 transition-all border border-[#1e1e2a]">
                  <div className="text-sm text-[#0ea5e9] font-semibold mb-1">{edu.year}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
                  <p className="text-gray-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030712] text-white py-12 px-6 border-t border-[#1e1e2a]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-gray-500 max-w-md">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
              <div className="mt-4">
                <a href="mailto:yhamada504@gmail.com" className="text-[#0ea5e9] hover:text-white transition-colors">
                  yhamada504@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a href="https://github.com/youssefhamada-y" className="text-gray-500 hover:text-[#0ea5e9] transition-colors text-2xl hover:scale-110 transform">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/youssef-hamada-99b312222/" className="text-gray-500 hover:text-[#0ea5e9] transition-colors text-2xl hover:scale-110 transform">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:yhamada504@gmail.com" className="text-gray-500 hover:text-[#0ea5e9] transition-colors text-2xl hover:scale-110 transform">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <p className="text-gray-600">© {new Date().getFullYear()} Youssef Hamada. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
