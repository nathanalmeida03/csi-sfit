import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Lightbulb, Calendar, MapPin } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To foster technological excellence and innovation among students while bridging the gap between academia and industry.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be the leading student organization that empowers future tech leaders and contributes to the advancement of computer science.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where students collaborate, learn, and grow together in their technological journey.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do, from organizing events to developing innovative solutions.',
    },
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Chapter Establishment',
      description: 'CSI SFIT chapter was officially established with 50 founding members.',
      color: 'from-primary-500 to-primary-700'
    },
    {
      year: '2017',
      title: 'First Tech Fest',
      description: 'Organized our first major technical festival attracting 500+ participants.',
      color: 'from-secondary-500 to-secondary-700'
    },
    {
      year: '2019',
      title: 'Industry Partnerships',
      description: 'Established partnerships with leading tech companies for internships and placements.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Successfully transitioned to hybrid events during the pandemic, reaching global audiences.',
      color: 'from-pink-500 to-pink-700'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Launched the Innovation Hub for student startups and research projects.',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      year: '2024',
      title: 'AI & ML Center',
      description: 'Established dedicated center for Artificial Intelligence and Machine Learning research.',
      color: 'from-teal-500 to-teal-700'
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">CSI SFIT</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Computer Society of India, SFIT Chapter, is a vibrant community of technology enthusiasts 
              dedicated to advancing computer science education and fostering innovation among students.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-400">Active Members</div>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary-500 mb-2">9+</div>
              <div className="text-gray-400">Years Active</div>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-gray-400">Events Organized</div>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">25+</div>
              <div className="text-gray-400">Awards Won</div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <GlassCard className="p-8 h-full text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading tech community
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 px-6">
                  <GlassCard className="p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white mb-3`}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </GlassCard>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-dark-800" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-primary-500" />
                <span className="text-gray-300">St. Francis Institute of Technology, Mumbai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-secondary-500" />
                <span className="text-gray-300">Mon - Fri, 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};