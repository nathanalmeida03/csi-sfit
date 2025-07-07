import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlassCard } from '../components/GlassCard';
import { Enhanced3DCard } from '../components/Enhanced3DCard';
import {
  IconBrandGmail,
  IconPhoneCall,
  IconBrandGoogleMaps,
  IconClockHour9,
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconSend
} from '@tabler/icons-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJNK7wRbWSHLQMthYsHf82uviKiJQM-vrIAPqti_OceIvLgTjmiGVegLgIZ0EOkRHI/exec'; 

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    emailjs.send(
      'service_khb9g4c',
      'template_qceaydk',
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      },
      'Y53Ks5mSa6DtLbiHI'
    ).then(() => {
      alert('Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, () => {
      alert('Failed to send message. Please try again.');
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: IconBrandGmail,
      title: 'Email',
      content: 'csi@sfit.ac.in',
      link: 'mailto:csi@sfit.ac.in',
      color: 'text-primary-500'
    },
    {
      icon: IconPhoneCall,
      title: 'Phone',
      content: (
        <p className="text-gray-300 space-x-2">
          <span>
            <a href="tel:+919325209355" className="hover:text-primary-500 transition-colors">
              Aryan Brahmane - +91 93252 09355
            </a>
          </span>
          <span className="mx-2 text-white/30">|</span>
          <span>
            <a href="tel:+919372937532" className="hover:text-primary-500 transition-colors">
              Rayan Pawar - +91 93729 37532
            </a>
          </span>
          <span className="mx-2 text-white/30">|</span>
          <span>
            <a href="tel:+917499531769" className="hover:text-primary-500 transition-colors">
              Shahiil Shet - +91 74995 31769
            </a>
          </span>
        </p>
      ),
      color: 'text-secondary-500'
    },
    {
      icon: IconBrandGoogleMaps,
      title: 'Address',
      content: 'St. Francis Institute of Technology, Mount Poinsur, S.V.P. Road, Borivali West, Mumbai - 400103',
      link: 'https://maps.app.goo.gl/Zh8Tk7Wj2m7pSGQJ6',
      color: 'text-purple-500'
    },
    {
      icon: IconClockHour9,
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 5:00 PM',
      color: 'text-pink-500'
    }
  ];

  const socialLinks = [
    { icon: IconBrandFacebook, link: 'https://www.facebook.com/csi.sfit/', color: 'hover:text-blue-500' },
    { icon: IconBrandX, link: 'https://x.com/csi_sfit?lang=ar-x-fm', color: 'hover:text-sky-500' },
    { icon: IconBrandInstagram, link: 'https://www.instagram.com/csi_sfit?igsh=YTdsdGM0bG9ieHRv', color: 'hover:text-pink-500' },
    { icon: IconBrandLinkedin, link: 'https://www.linkedin.com/company/csi-sfit/', color: 'hover:text-blue-600' }
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
              Have questions about CSI SFIT? Want to collaborate or join our community? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Social */}
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
                                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
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
                className="mb-4" // This margin-bottom will create separation before the next section
              >
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-6"> {/* Increased space-x from 4 to 6 */}
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
                        className={`w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`} // Corrected line 196
                      >
                        <Icon className="w-8 h-8" /> {/* Increased icon size to w-8 h-8 */}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Send Message Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Enhanced3DCard>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Send Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <IconSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </div>
              </Enhanced3DCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="pt-10 pb-10"> {/* Adjusted padding here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
