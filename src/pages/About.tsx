import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Award, Lightbulb, Calendar, MapPin } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { TiltedCardWithContent } from "../components/TiltedCardWithContent";
import StarBorder from '../components/StarBorder';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineRefs = useRef<(HTMLLIElement | null)[]>([]);

  const values = [
    { icon: Target, title: 'Mission', description: 'To foster technological excellence and innovation among students while bridging the gap between academia and industry.' },
    { icon: Lightbulb, title: 'Vision', description: 'To be the leading student organization that empowers future tech leaders and contributes to the advancement of computer science.' },
    { icon: Users, title: 'Community', description: 'Building a supportive community where students collaborate, learn, and grow together in their technological journey.' },
    { icon: Award, title: 'Excellence', description: 'Striving for excellence in everything we do, from organizing events to developing innovative solutions.' },
  ];

  const timeline = [
    { year: '2015', title: 'Chapter Establishment', description: 'CSI SFIT chapter was officially established with 50 founding members.', color: 'from-primary-500 to-primary-700' },
    { year: '2017', title: 'First Tech Fest', description: 'Organized our first major technical festival attracting 500+ participants.', color: 'from-secondary-500 to-secondary-700' },
    { year: '2019', title: 'Industry Partnerships', description: 'Established partnerships with leading tech companies for internships and placements.', color: 'from-purple-500 to-purple-700' },
    { year: '2021', title: 'Digital Transformation', description: 'Successfully transitioned to hybrid events during the pandemic, reaching global audiences.', color: 'from-pink-500 to-pink-700' },
    { year: '2023', title: 'Innovation Hub', description: 'Launched the Innovation Hub for student startups and research projects.', color: 'from-indigo-500 to-indigo-700' },
    { year: '2024', title: 'AI & ML Center', description: 'Established dedicated center for Artificial Intelligence and Machine Learning research.', color: 'from-teal-500 to-teal-700' },
  ];

  useEffect(() => {
    if (!timelineRefs.current.length) return;

    const triggers: ScrollTrigger[] = [];

    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        const ctx = gsap.context(() => {
          const animation = gsap.fromTo(
            ref,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: ref,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 2,
              },
            }
          );
          triggers.push(animation.scrollTrigger as ScrollTrigger);
        }, ref);

        return () => ctx.revert();
      }
    });
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#2580E4]/15 via-transparent to-[#FFCDB9]/10">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right,#42e0d8,#1e30ff)" }}>CSI SFIT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Computer Society of India, SFIT Chapter, is a vibrant community of technology enthusiasts
              dedicated to advancing computer science education and fostering innovation among students.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { count: '500+', label: 'Active Members' },
              { count: '9+', label: 'Years Active' },
              { count: '50+', label: 'Events Organized' },
              { count: '25+', label: 'Awards Won' },
            ].map((stat, i) => (
              <StarBorder key={i} color="#FFCDB9" thickness={2}>
                <GlassCard className="p-4 text-center w-72 h-22">
                  <div className="text-2xl font-bold text-[#36B7B7] mb-2">{stat.count}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </GlassCard>
              </StarBorder>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #2580E4, #36B7B7)" }}>Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <TiltedCardWithContent
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #2580E4, #36B7B7)" }}>Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading tech community
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#1e30ff]  to-[#42e0d8]" />

            <ul className="space-y-16">
              {timeline.map((item, index) => (
                <li
                  key={item.year}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 w-full px-4">
                    <GlassCard className="p-6 no-hover">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white mb-3`}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </GlassCard>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f7baa8] rounded-full border-4 border-dark-800 z-10" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-[#1e30ff]" />
                <span className="text-[#f7baa8]">St. Francis Institute of Technology, Mumbai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-secondary-500" />
                <span className="text-[#f7baa8]">Mon - Fri, 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};