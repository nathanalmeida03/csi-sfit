import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, Calendar, Users, MapPin } from 'lucide-react';
import { Enhanced3DCard } from '../components/Enhanced3DCard';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: 'workshop' | 'hackathon' | 'seminar' | 'competition' | 'networking';
  attendees: number;
  location: string;
}

export const Gallery: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'AI/ML Workshop 2024',
      description: 'Hands-on workshop on machine learning algorithms and implementation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      category: 'workshop',
      attendees: 75,
      location: 'Computer Lab A-301'
    },
    {
      id: '2',
      title: 'CodeFest Hackathon',
      description: '48-hour coding marathon with innovative project presentations',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-20',
      category: 'hackathon',
      attendees: 120,
      location: 'Main Auditorium'
    },
    {
      id: '3',
      title: 'Tech Industry Panel',
      description: 'Industry experts sharing insights about career opportunities',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-25',
      category: 'seminar',
      attendees: 90,
      location: 'Seminar Hall B-201'
    },
    {
      id: '4',
      title: 'Web Development Bootcamp',
      description: 'Intensive training on modern web development technologies',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-01',
      category: 'workshop',
      attendees: 65,
      location: 'Computer Lab B-302'
    },
    {
      id: '5',
      title: 'Coding Competition',
      description: 'Annual programming contest with challenging algorithmic problems',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-05',
      category: 'competition',
      attendees: 85,
      location: 'Computer Labs'
    },
    {
      id: '6',
      title: 'Alumni Networking',
      description: 'Connecting current students with successful alumni in tech',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-10',
      category: 'networking',
      attendees: 110,
      location: 'College Cafeteria'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'seminar', label: 'Seminars' },
    { id: 'competition', label: 'Competitions' },
    { id: 'networking', label: 'Networking' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e30ff]/20 via-[#42e0d8]/10 to-[#f7baa8]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Event <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Relive the moments from our exciting events, workshops, and community gatherings. 
              See the passion and innovation that drives our community.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#36B7B7] to-[#2AA198] text-white shadow-lg shadow-[#36B7B7]/25'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={galleryRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Enhanced3DCard 
                  className="h-full cursor-pointer group"
                  glowColor="#ff6b00"
                >
                  <div 
                    className="relative overflow-hidden h-full"
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                      
                      {/* Zoom overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-dark-800/60 flex items-center justify-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full flex items-center justify-center"
                        >
                          <ZoomIn className="w-8 h-8 text-primary-500" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {item.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-primary-500 mr-2" />
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-secondary-500 mr-2" />
                          {item.attendees} attendees
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-purple-500 mr-2" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Enhanced3DCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-800/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-dark-800/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[60vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 text-primary-500 mr-2" />
                    {new Date(selectedImage.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 text-secondary-500 mr-2" />
                    {selectedImage.attendees} attendees
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 text-purple-500 mr-2" />
                    {selectedImage.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};