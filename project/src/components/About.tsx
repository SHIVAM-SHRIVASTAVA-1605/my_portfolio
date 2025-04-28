import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-dark-700 dark:text-dark-300 max-w-2xl mx-auto">
            I'm a passionate developer with expertise in creating beautiful, functional web and mobile apps.
            Here's a bit about my background and journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-dark-900 rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-900 dark:text-white">My Story</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4 leading-relaxed">
              I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly websites and applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, intuitive solutions.
            </p>
            <p className="text-dark-700 dark:text-dark-300 mb-4 leading-relaxed">
              My journey in web development began 2 years ago, and since then, I've worked on a variety of projects that have allowed me to refine my skills and stay current with the latest technologies and best practices in the industry.
            </p>
            <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-md p-6 flex"
            >
              <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <GraduationCap className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">Computer Science & Engineering</h4>
                <p className="text-primary-600 dark:text-primary-400 mb-1">Lovely Professional University.</p>
                <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                  <Calendar size={14} className="mr-1" /> 2022 - Present
                </p>
              </div>
            </motion.div>

            <motion.div 
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-md p-6 flex"
            >
              <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <GraduationCap className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">12th (C.B.S.E.)</h4>
                <p className="text-primary-600 dark:text-primary-400 mb-1">Holy Mission Senior Secondary School</p>
                <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                  <Calendar size={14} className="mr-1" /> 2020 - 2021
                </p>
              </div>
            </motion.div>

            <motion.div 
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-md p-6 flex"
            >
              <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <GraduationCap className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">10th (C.B.S.E.)</h4>
                <p className="text-primary-600 dark:text-primary-400 mb-1">Holy Mission senior Secondary School</p>
                <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                  <Calendar size={14} className="mr-1" /> 2018 - 2019
                </p>
              </div>
            </motion.div>

            <motion.div 
              custom={4}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-md p-6 flex"
            >
              <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <MapPin className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">Location</h4>
                <p className="text-primary-600 dark:text-primary-400">Punjab, India.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;