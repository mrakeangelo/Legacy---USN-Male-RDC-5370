import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const PhotoGallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1541969119788-9eb6a2a9d6a2?w=800&h=600&fit=crop',
      caption: 'Division 901 Graduation Ceremony',
      category: 'graduation'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      caption: 'Drill Instruction on the Grinder',
      category: 'training'
    },
    {
      src: 'https://images.unsplash.com/photo-1561133669-fe5d7e1f0e8a?w=800&h=600&fit=crop',
      caption: 'Holiday Routine - Sailors at Rest',
      category: 'candid'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      caption: 'RDC Team Leadership Meeting',
      category: 'leadership'
    },
    {
      src: 'https://images.unsplash.com/photo-1541969119788-9eb6a2a9d6a2?w=800&h=600&fit=crop',
      caption: 'Division 915 Battle Stations',
      category: 'training'
    },
    {
      src: 'https://images.unsplash.com/photo-1561133669-fe5d7e1f0e8a?w=800&h=600&fit=crop',
      caption: 'Pass in Review Formation',
      category: 'graduation'
    }
  ];

  const categories = ['all', 'graduation', 'training', 'candid', 'leadership'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-navy-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            PHOTO ARCHIVE
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Capturing the moments that matter - from drill instruction to graduation day, 
            these images tell the story of transformation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-command font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-gold text-navy-primary'
                  : 'bg-navy-accent text-silver hover:bg-navy-primary hover:text-gold'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <SafeIcon icon={FiCamera} className="text-gold text-3xl" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-primary/80 to-transparent p-4">
                <p className="text-dress font-command font-medium">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              >
                <SafeIcon icon={FiX} className="text-3xl" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors"
              >
                <SafeIcon icon={FiChevronLeft} className="text-3xl" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors"
              >
                <SafeIcon icon={FiChevronRight} className="text-3xl" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-command font-medium text-center">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;