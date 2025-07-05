// Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Enhanced3DCard } from '../components/Enhanced3DCard';

export const Contact: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'csi@sfit.ac.in',
      link: 'mailto:csi@sfit.ac.in',
      color: 'text-primary-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'text-secondary-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'St. Francis Institute of Technology, Mount Poinsur, S.V.P. Road, Borivali West, Mumbai - 400103',
      link: 'https://maps.app.goo.gl/Zh8Tk7Wj2m7pSGQJ6',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 5:00 PM',
      color: 'text-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, link: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, link: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, link: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have questions about CSI SFIT? Want to collaborate or join our community? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Enhanced3DCard intensity={5}>
                        <div className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center ${info.color}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-300 hover:text-primary-500 transition-colors"
                                >
                                  {info.content}
                                </a>
                              ) : (
                                <p className="text-gray-300">{info.content}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </Enhanced3DCard>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Location</h2>
            <GlassCard className="overflow-hidden">
              <div className="h-96 w-full">
                <iframe
  title="CSI SFIT Location"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3766.8900917764836!2d72.853269!3d19.2436212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13affffffff%3A0xfd071f1d3a7844ef!2sSt.%20Francis%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1751699365795!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0, filter: 'invert(90%)' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
