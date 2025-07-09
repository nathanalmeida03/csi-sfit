import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Lightbulb, MapPin, Calendar } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Random3DCard from "../components/Random3Dcard";
import { Fade } from "react-awesome-reveal";


gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const csiRef = useRef<HTMLSpanElement | null>(null);

  const { ref: heroInViewRef, inView: heroInView } = useInView({ triggerOnce: true });
  const setHeroRefs = useCallback((node: HTMLDivElement | null) => {
    if (node) heroRef.current = node;
    heroInViewRef(node);
  }, [heroInViewRef]);

  const timelineRefs = useRef<(HTMLLIElement | null)[]>([]);

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

  useEffect(() => {
    if (headingRef.current && paragraphRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        paragraphRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.3, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        csiRef.current,
        { scale: 1, opacity: 0.5 },
        {
          scale: 1.2,
          opacity: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 0.8,
        }
      );
    }
  }, []);

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

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={setHeroRefs} className="text-center mb-16">
            <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span ref={csiRef} className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">CSI SFIT</span>
            </h1>
            <p ref={paragraphRef} className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Computer Society of India, SFIT Chapter, is a vibrant community of technology enthusiasts dedicated to advancing computer science education and fostering innovation among students.
            </p>
          </div>

          {/* Stats */}
          <Fade direction="up" delay={100} cascade damping={0.1} triggerOnce>
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
          </Fade>
        </div>
      </section>

      {/* Values */}
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
                  <Random3DCard glowColor={index % 2 === 0 ? '#34D399' : '#FFD700'}>
                    <div className="p-8 h-full text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </Random3DCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading tech community
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500" />

            <ul className="space-y-16">
              {timeline.map((item, index) => (
                <li
                  key={item.year}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 w-full px-4">
                    <GlassCard className="p-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white mb-3`}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </GlassCard>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-dark-800 z-10" />
                </li>
              ))}
            </ul>
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
