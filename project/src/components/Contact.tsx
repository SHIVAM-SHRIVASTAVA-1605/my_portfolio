import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { socialLinks } from '../data/navLinks';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Message sent! (This is a demo)');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

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
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-dark-700 dark:text-dark-300 max-w-2xl mx-auto">
            Have a project in mind or want to know more about my work? 
            Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <motion.div 
              variants={itemVariants}
              className="flex items-start mb-8"
            >
              <div className="mr-4 mt-1 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <MapPin className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-dark-900 dark:text-white">Location</h4>
                <p className="text-dark-600 dark:text-dark-400">Punjab, India</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-start mb-8"
            >
              <div className="mr-4 mt-1 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <Mail className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-dark-900 dark:text-white">Email</h4>
                <a href="mailto:your.email@example.com" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  shivam091204@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-start mb-8"
            >
              <div className="mr-4 mt-1 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                <Phone className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-dark-900 dark:text-white">Phone</h4>
                <a href="tel:+11234567890" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +91 8935895148
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium text-dark-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  // Import the icon component from lucide-react
                  let Icon;
                  switch (link.icon) {
                    case 'github':
                      Icon = Github;
                      break;
                    case 'linkedin':
                      Icon = Linkedin;
                      break;
                    case 'twitter':
                      Icon = Twitter;
                      break;
                    case 'mail':
                      Icon = Mail;
                      break;
                    default:
                      Icon = ExternalLink;
                  }

                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-dark-800 p-3 rounded-full text-dark-700 dark:text-dark-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                      aria-label={`Follow on ${link.platform}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Import necessary icons
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default Contact;