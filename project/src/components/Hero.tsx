import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-100 dark:bg-accent-900/20 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <motion.p 
              className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-dark-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block">Shivam</span>
              <span className="text-primary-600 dark:text-primary-400">Full Stack Developer</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-dark-700 dark:text-dark-300 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build exceptional digital experiences that are fast, accessible, and visually appealing with a focus on responsive design and seamless user interactions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-all duration-300 inline-block"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-xl relative overflow-hidden">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-dark-800 overflow-hidden">
                <img 
                  src="https://avatars.githubusercontent.com/u/114481418?s=400&u=124a358df240441198beede8d8adf7d3b97fbd6c&v=4" 
                  alt="Shivam - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.7,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          onClick={scrollToNextSection}
        >
          <ArrowDown className="text-primary-600 dark:text-primary-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;