import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import { Code, Server, PaintBucket, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: 'all', name: 'All', icon: <Code /> },
    { id: 'frontend', name: 'Frontend', icon: <Code /> },
    { id: 'backend', name: 'Backend', icon: <Server /> },
    { id: 'design', name: 'Design', icon: <PaintBucket /> },
    { id: 'tools', name: 'Tools', icon: <Wrench /> },
  ];

  const filteredSkills = skills.filter((skill) => 
    activeCategory === 'all' || skill.category === activeCategory
  );

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-dark-700 dark:text-dark-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools across different areas of development.
            Here's a snapshot of my technical expertise.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-5 py-2 rounded-full transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-700'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 flex flex-col items-center transition-transform hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                {/* Here you would ideally use the actual icons, but for simplicity we'll use placeholders */}
                <div className="text-primary-600 dark:text-primary-400 text-xl">{skill.icon.charAt(0).toUpperCase()}</div>
              </div>
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{skill.name}</h3>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      i < skill.level
                        ? 'bg-primary-600 dark:bg-primary-400'
                        : 'bg-gray-300 dark:bg-dark-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;