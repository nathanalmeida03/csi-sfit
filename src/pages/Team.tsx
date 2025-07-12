import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Award, Users, Code, Lightbulb } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  year: string;
  bio: string;
  image: string;
  skills: string[];
  achievements: string[];
  social: {
    github?: string;
    linkedin?: string;
    email: string;
  };
  category: 'core' | 'technical' | 'creative' | 'operations';
}

export const Team: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Arjun Sharma',
      position: 'President',
      department: 'Computer Engineering',
      year: 'Final Year',
      bio: 'Passionate about AI/ML and leading the team towards innovation. Currently working on deep learning research projects.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Python', 'Machine Learning', 'Leadership', 'TensorFlow'],
      achievements: ['Best Project Award 2023', 'Google Summer of Code', 'Published Research Paper'],
      social: {
        github: 'https://github.com/arjun',
        linkedin: 'https://linkedin.com/in/arjun',
        email: 'arjun@csi.sfit.ac.in'
      },
      category: 'core'
    },
    {
      id: '2',
      name: 'Priya Patel',
      position: 'Vice President',
      department: 'Information Technology',
      year: 'Third Year',
      bio: 'Full-stack developer with expertise in modern web technologies. Leads technical workshops and hackathons.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      achievements: ['Winner - Smart India Hackathon', 'Microsoft Student Ambassador', 'Open Source Contributor'],
      social: {
        github: 'https://github.com/priya',
        linkedin: 'https://linkedin.com/in/priya',
        email: 'priya@csi.sfit.ac.in'
      },
      category: 'core'
    },
    {
      id: '3',
      name: 'Rahul Krishnan',
      position: 'Technical Head',
      department: 'Computer Engineering',
      year: 'Final Year',
      bio: 'Cybersecurity enthusiast and competitive programmer. Organizes coding competitions and security workshops.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Cybersecurity', 'C++', 'Python', 'Ethical Hacking'],
      achievements: ['ACM ICPC Regionalist', 'Bug Bounty Hunter', 'CEH Certified'],
      social: {
        github: 'https://github.com/rahul',
        linkedin: 'https://linkedin.com/in/rahul',
        email: 'rahul@csi.sfit.ac.in'
      },
      category: 'technical'
    },
    {
      id: '4',
      name: 'Sneha Gupta',
      position: 'Creative Head',
      department: 'Information Technology',
      year: 'Second Year',
      bio: 'UI/UX designer and digital artist. Creates stunning visuals for events and manages social media presence.',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['UI/UX Design', 'Adobe Creative Suite', 'Figma', 'Digital Marketing'],
      achievements: ['Best Design Award', 'Adobe Certified Expert', '50K+ Social Media Reach'],
      social: {
        github: 'https://github.com/sneha',
        linkedin: 'https://linkedin.com/in/sneha',
        email: 'sneha@csi.sfit.ac.in'
      },
      category: 'creative'
    },
    {
      id: '5',
      name: 'Vikram Singh',
      position: 'Operations Head',
      department: 'Computer Engineering',
      year: 'Third Year',
      bio: 'Expert in event management and logistics. Ensures smooth execution of all CSI activities and workshops.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Project Management', 'Event Planning', 'Communication', 'Team Coordination'],
      achievements: ['Organized 20+ Events', 'PMP Certified', 'Student Leadership Award'],
      social: {
        linkedin: 'https://linkedin.com/in/vikram',
        email: 'vikram@csi.sfit.ac.in'
      },
      category: 'operations'
    },
    {
      id: '6',
      name: 'Ananya Rao',
      position: 'Web Development Lead',
      department: 'Information Technology',
      year: 'Third Year',
      bio: 'Frontend specialist passionate about creating beautiful and functional web experiences.',
      image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      achievements: ['Freelance Developer', 'Open Source Maintainer', 'Tech Blog Writer'],
      social: {
        github: 'https://github.com/ananya',
        linkedin: 'https://linkedin.com/in/ananya',
        email: 'ananya@csi.sfit.ac.in'
      },
      category: 'technical'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Members', icon: Users },
    { id: 'core', label: 'Core Team', icon: Award },
    { id: 'technical', label: 'Technical', icon: Code },
    { id: 'creative', label: 'Creative', icon: Lightbulb },
    { id: 'operations', label: 'Operations', icon: Users }
  ];

  const filteredMembers = selectedCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

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
              Our <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals who drive innovation and excellence at CSI SFIT. 
              Together, we're building the future of technology.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={teamRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <GlassCard className="overflow-hidden h-full group">
                  {/* Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                    
                    {/* Social Links Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-dark-800/80 flex items-center justify-center space-x-4"
                    >
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </motion.a>
                      )}
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                          <Linkedin className="w-6 h-6" />
                        </motion.a>
                      )}
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      >
                        <Mail className="w-6 h-6" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-primary-500 font-medium mb-1">{member.position}</p>
                    <p className="text-sm text-gray-400 mb-3">{member.department} • {member.year}</p>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-xs text-gray-400 flex items-center"
                          >
                            <Award className="w-3 h-3 text-secondary-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};