import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Award, Handshake, Download, ExternalLink } from 'lucide-react';
import { Enhanced3DCard } from '../components/Enhanced3DCard';
import { GlassCard } from '../components/GlassCard';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
  website: string;
  contribution: string;
}

export const Sponsors: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sponsorsRef, sponsorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sponsors: Sponsor[] = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'platinum',
      description: 'Leading technology solutions provider supporting innovation in education.',
      website: 'https://techcorp.com',
      contribution: 'Event Sponsorship & Mentorship'
    },
    {
      id: '2',
      name: 'InnovateLabs',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'gold',
      description: 'Startup incubator fostering technological innovation and entrepreneurship.',
      website: 'https://innovatelabs.com',
      contribution: 'Hackathon Prizes & Workshops'
    },
    {
      id: '3',
      name: 'DataFlow Systems',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'gold',
      description: 'Big data analytics and cloud computing solutions provider.',
      website: 'https://dataflow.com',
      contribution: 'Infrastructure & Training'
    },
    {
      id: '4',
      name: 'CodeCraft Academy',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'silver',
      description: 'Online coding education platform with industry-focused curriculum.',
      website: 'https://codecraft.com',
      contribution: 'Educational Resources'
    },
    {
      id: '5',
      name: 'DevTools Pro',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'silver',
      description: 'Professional development tools and software solutions.',
      website: 'https://devtools.com',
      contribution: 'Software Licenses'
    },
    {
      id: '6',
      name: 'StartupHub',
      logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'bronze',
      description: 'Entrepreneur support network and business development platform.',
      website: 'https://startuphub.com',
      contribution: 'Networking Events'
    }
  ];

  const tierColors = {
    platinum: {
      gradient: 'from-gray-300 to-gray-500',
      glow: '#e5e7eb',
      border: 'border-gray-300/30'
    },
    gold: {
      gradient: 'from-yellow-400 to-yellow-600',
      glow: '#fbbf24',
      border: 'border-yellow-400/30'
    },
    silver: {
      gradient: 'from-gray-400 to-gray-600',
      glow: '#9ca3af',
      border: 'border-gray-400/30'
    },
    bronze: {
      gradient: 'from-orange-400 to-orange-600',
      glow: '#fb923c',
      border: 'border-orange-400/30'
    }
  };

  const sponsorshipTiers = [
    {
      tier: 'Platinum',
      price: '₹50,000+',
      benefits: [
        'Logo on all event materials',
        'Dedicated booth space',
        'Speaking opportunity',
        'Social media promotion',
        'Direct student engagement',
        'Annual partnership certificate'
      ],
      color: 'from-gray-300 to-gray-500'
    },
    {
      tier: 'Gold',
      price: '₹25,000+',
      benefits: [
        'Logo on major materials',
        'Booth space',
        'Social media mentions',
        'Student CV database access',
        'Partnership certificate'
      ],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      tier: 'Silver',
      price: '₹10,000+',
      benefits: [
        'Logo on select materials',
        'Social media mentions',
        'Partnership certificate',
        'Event updates'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      tier: 'Bronze',
      price: '₹5,000+',
      benefits: [
        'Logo on website',
        'Social media mention',
        'Partnership certificate'
      ],
      color: 'from-orange-400 to-orange-600'
    }
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
              Our <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Sponsors</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're grateful to our amazing sponsors who support our mission to empower students 
              with technology education and innovation opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={sponsorsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Current <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Partners</span>
            </h2>
          </motion.div>

          {/* Platinum Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Platinum Partners</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Enhanced3DCard glowColor={tierColors.platinum.glow}>
                    <div className="p-8 text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h4>
                      <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
                      <p className="text-primary-500 text-sm mb-4">{sponsor.contribution}</p>
                      <motion.a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-300 to-gray-500 text-dark-800 rounded-lg font-medium"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </Enhanced3DCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Gold Partners</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Enhanced3DCard glowColor={tierColors.gold.glow}>
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{sponsor.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
                      <p className="text-secondary-500 text-sm mb-3">{sponsor.contribution}</p>
                      <motion.a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-dark-800 rounded-lg text-sm font-medium"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </Enhanced3DCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Silver & Bronze Sponsors */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-300 mb-6 text-center">Silver Partners</h3>
              <div className="space-y-4">
                {sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={sponsorsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{sponsor.name}</h4>
                          <p className="text-sm text-gray-400">{sponsor.contribution}</p>
                        </div>
                        <motion.a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-400 hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-300 mb-6 text-center">Bronze Partners</h3>
              <div className="space-y-4">
                {sponsors.filter(s => s.tier === 'bronze').map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={sponsorsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{sponsor.name}</h4>
                          <p className="text-sm text-gray-400">{sponsor.contribution}</p>
                        </div>
                        <motion.a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-400 hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Sponsor</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Partner with us to support the next generation of tech innovators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 50 }}
                animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Enhanced3DCard>
                  <div className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier.tier}</h3>
                    <p className="text-2xl font-bold text-primary-500 mb-4">{tier.price}</p>
                    <ul className="space-y-2 text-sm text-gray-400 flex-1">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <Star className="w-3 h-3 text-secondary-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium"
                    >
                      Choose Plan
                    </motion.button>
                  </div>
                </Enhanced3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Kit */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 text-center">
            <Handshake className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Sponsorship Kit</h3>
            <p className="text-gray-400 mb-6">
              Download our comprehensive sponsorship kit to learn more about partnership opportunities 
              and the impact of your support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-lg font-medium"
            >
              <Download className="w-5 h-5" />
              <span>Download Sponsorship Kit</span>
            </motion.button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};