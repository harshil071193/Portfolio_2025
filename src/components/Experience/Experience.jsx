import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../../data/experience';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey spanning over 7 years
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-white dark:border-gray-800"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Title and Company */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                            <FaBriefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      {/* Location and Period */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">▸</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

