import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Users, ExternalLink, Filter, Search } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'workshop' | 'seminar' | 'competition' | 'hackathon' | 'networking';
  status: 'upcoming' | 'ongoing' | 'completed';
  image: string;
  attendees: number;
  maxAttendees: number;
  tags: string[];
  featured: boolean;
}

export const Events: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const events: Event[] = [
    {
      id: '1',
      title: 'AI/ML Workshop Series',
      description: 'Comprehensive workshop covering machine learning fundamentals, neural networks, and practical implementation using Python and TensorFlow.',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab A-301',
      category: 'workshop',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 45,
      maxAttendees: 60,
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      featured: true
    },
    {
      id: '2',
      title: 'CodeFest 2024',
      description: '48-hour coding hackathon where teams compete to build innovative solutions to real-world problems.',
      date: '2024-02-22',
      time: '9:00 AM - 9:00 AM (+2 days)',
      location: 'Main Auditorium & Labs',
      category: 'hackathon',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 120,
      maxAttendees: 150,
      tags: ['Hackathon', 'Innovation', 'Competition', 'Prizes'],
      featured: true
    },
    {
      id: '3',
      title: 'Industry Connect: Tech Careers',
      description: 'Panel discussion with industry leaders about career opportunities, skill requirements, and future trends in technology.',
      date: '2024-02-08',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall B-201',
      category: 'seminar',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 85,
      maxAttendees: 100,
      tags: ['Career', 'Industry', 'Networking', 'Guidance'],
      featured: false
    },
    {
      id: '4',
      title: 'Web Development Bootcamp',
      description: 'Intensive bootcamp covering full-stack web development with modern frameworks like React, Node.js, and MongoDB.',
      date: '2024-01-25',
      time: '9:00 AM - 6:00 PM',
      location: 'Computer Lab B-302',
      category: 'workshop',
      status: 'completed',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 55,
      maxAttendees: 55,
      tags: ['Web Development', 'React', 'Node.js', 'Full Stack'],
      featured: false
    },
    {
      id: '5',
      title: 'Cybersecurity Awareness',
      description: 'Workshop on cybersecurity best practices, ethical hacking basics, and digital privacy protection.',
      date: '2024-03-01',
      time: '11:00 AM - 3:00 PM',
      location: 'Computer Lab A-305',
      category: 'workshop',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 30,
      maxAttendees: 40,
      tags: ['Cybersecurity', 'Ethical Hacking', 'Privacy', 'Security'],
      featured: false
    },
    {
      id: '6',
      title: 'Alumni Networking Night',
      description: 'Connect with CSI SFIT alumni working in top tech companies. Share experiences and build professional networks.',
      date: '2024-02-12',
      time: '6:00 PM - 9:00 PM',
      location: 'College Cafeteria',
      category: 'networking',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 75,
      maxAttendees: 100,
      tags: ['Alumni', 'Networking', 'Career', 'Experience'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', count: events.length },
    { id: 'workshop', label: 'Workshops', count: events.filter(e => e.category === 'workshop').length },
    { id: 'seminar', label: 'Seminars', count: events.filter(e => e.category === 'seminar').length },
    { id: 'competition', label: 'Competitions', count: events.filter(e => e.category === 'competition').length },
    { id: 'hackathon', label: 'Hackathons', count: events.filter(e => e.category === 'hackathon').length },
    { id: 'networking', label: 'Networking', count: events.filter(e => e.category === 'networking').length },
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      workshop: 'from-blue-500 to-blue-700',
      seminar: 'from-green-500 to-green-700',
      competition: 'from-purple-500 to-purple-700',
      hackathon: 'from-red-500 to-red-700',
      networking: 'from-yellow-500 to-yellow-700',
    };
    return colors[category as keyof typeof colors] || 'from-[#2580E4] to-[#36B7B7]';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      upcoming: 'bg-green-500/20 text-green-400 border-green-500/30',
      ongoing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      completed: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };
    return colors[status as keyof typeof colors] || 'bg-[#2580E4]/20 text-[#2580E4] border-[#2580E4]/30';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Component content continues here... */}
    </div>
  );
};
