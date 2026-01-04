import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaMobile, FaPalette, FaUsers } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Expert in React.js, React Native, and Angular for building modern web and mobile applications',
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Specialized in cross-platform mobile app development using React Native',
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Creating visually appealing, responsive interfaces with Tailwind CSS and Bootstrap',
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Experienced in Agile methodologies and mentoring junior developers',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about my professional journey and expertise
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Results-driven Front-end Developer with a proven track record in crafting seamless user experiences across web and mobile platforms using React.js and React Native. Experienced in Angular for UI development and adept at integrating APIs to enhance functionality. Skilled in employing a variety of styling frameworks, including Bootstrap and Tailwind CSS, and proficient in HTML, CSS, and JavaScript. Known for a keen eye for detail and a commitment to delivering high-quality, responsive web and mobile applications.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4 mx-auto">
                  <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '7+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

