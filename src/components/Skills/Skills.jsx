import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../../data/skills';
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMobileAlt,
  FaBootstrap,
  FaNode,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { HiCode } from 'react-icons/hi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap = {
    react: FaReact,
    mobile: FaMobileAlt,
    angular: FaAngular,
    html: FaHtml5,
    css: FaCss3Alt,
    js: FaJs,
    tailwind: SiTailwindcss,
    bootstrap: FaBootstrap,
    node: FaNode,
    express: SiExpress,
    mongodb: SiMongodb,
    git: FaGitAlt,
    agile: HiCode,
    testing: HiCode,
  };

  const categoryTitles = {
    frontend: 'Frontend Technologies',
    styling: 'Styling Frameworks',
    backend: 'Backend Technologies',
    tools: 'Tools & Methods',
  };

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with to build amazing applications
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {Object.entries(skills).map(([category, items], categoryIndex) => {
              const IconComponent = category === 'frontend' ? FaReact : 
                                   category === 'styling' ? SiTailwindcss :
                                   category === 'backend' ? FaNode : FaGitAlt;

              return (
                <motion.div key={category} variants={itemVariants}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {categoryTitles[category]}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((skill, index) => {
                      const SkillIcon = iconMap[skill.icon] || HiCode;
                      return (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                                <SkillIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {skill.name}
                              </h4>
                            </div>
                            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              custom={skill.level}
                              variants={progressVariants}
                              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web and mobile development. My expertise spans from frontend frameworks to backend technologies, ensuring I can deliver complete solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

