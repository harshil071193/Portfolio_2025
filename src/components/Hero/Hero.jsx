import { motion } from 'framer-motion';
import { HiArrowDown, HiCode } from 'react-icons/hi';
import { FaReact, FaAngular, FaMobileAlt } from 'react-icons/fa';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary-200 dark:text-primary-800"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaReact className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-primary-200 dark:text-primary-800"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaAngular className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-20 text-primary-200 dark:text-primary-800"
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaMobileAlt className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <HiCode className="inline-block mr-2" />
              Frontend Developer
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent"
          >
            Hi, I'm Harshil Dave
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
          >
            Results-driven Front-end Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            With <span className="font-bold text-primary-600 dark:text-primary-400">7+ years</span> of experience crafting seamless user experiences across web and mobile platforms using React.js and React Native
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
            >
              View My Work
              <HiArrowDown className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 rounded-lg font-semibold transition-all duration-200"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <HiArrowDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

