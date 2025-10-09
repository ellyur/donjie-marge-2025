"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';

import venuee from "@assets/venuee.png";

const ceremonyImage = "https://res.cloudinary.com/dazghdddu/image/upload/v1759982327/ceremony_szmu8e.jpg";
const receptionImage = "https://res.cloudinary.com/dazghdddu/image/upload/v1759982326/reception_uon0ea.jpg";

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'Christ the King Parish - Greenmeadows',
      address: 'Diocese of Cubao',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/R1Ut2P1XEPam3uMg8',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8976!2d121.0644!3d14.6099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzM1LjYiTiAxMjHCsDAzJzUxLjgiRQ!5e0!3m2!1sen!2sph!4v1234567890',
      description: 'Join us at Christ the King Parish - Greenmeadows as we exchange our vows and begin our journey together.',
      details: 'The ceremony begins at 3:00 PM. Please arrive early to be seated. Dress code: Formal to Semi-Formal attire.',
      startTime: '3:00 PM',
      locationGuide: 'View on Maps →'
    },
    {
      title: 'Reception',
      name: 'The Clubhouse at Third Greenmeadows',
      address: 'Greenmeadows',
      image: receptionImage,
      mapUrl: 'https://maps.app.goo.gl/Hm8ApVTL7YS3KxTN8',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8976!2d121.0644!3d14.6099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzM1LjYiTiAxMjHCsDAzJzUxLjgiRQ!5e0!3m2!1sen!2sph!4v1234567890',
      description: 'Celebrate with us at The Clubhouse at Third Greenmeadows for an evening of dinner, dancing, and joyful memories.',
      details: 'Reception starts at 6:00 PM. Join us for cocktails, dinner, and a night to remember.',
      startTime: '6:00 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-20 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-4xl font-display mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Modern Creative Container */}
              <div className="relative max-w-5xl mx-auto">
                {/* Decorative background layers */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-60" />
                <div className="absolute -inset-2 bg-white/30 backdrop-blur-sm rounded-xl" />
                
                {/* Main Content Card */}
                <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-primary/20">
                  {/* Header with decorative elements */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 border-b-2 border-primary/20">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
                      >
                        <h2 className="font-display text-foreground mb-2 text-2xl md:text-3xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                          {venue.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-8 h-px bg-primary/40" />
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <div className="w-8 h-px bg-primary/40" />
                        </div>
                        <h3 className="font-body text-primary font-semibold text-lg md:text-xl" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                          {venue.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <p className="text-sm font-body text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                            {venue.address}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Section with Modern Frame */}
                  <div className="relative p-6 md:p-8">
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Image frame decoration */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
                      <img
                        src={venuee}
                        alt={venue.name}
                        className="relative w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
                        loading="lazy"
                        data-testid={`img-${venue.title.toLowerCase()}-venue`}
                      />
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 px-6 md:px-8 pb-6">
                    {/* Left Column - Description */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">About the Venue</h4>
                      </div>
                      <p className="text-base font-body leading-relaxed text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                        {venue.description}
                      </p>
                      <p className="text-sm font-body text-foreground/80 italic" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                        {venue.details}
                      </p>
                    </div>

                    {/* Right Column - Map */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Location Map</h4>
                      </div>
                      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl border-2 border-primary/20">
                        <iframe
                          src={venue.mapEmbed}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          data-testid={`map-${venue.title.toLowerCase()}-embed`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer with Time and Directions */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-6 md:px-8 py-6 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-primary/20">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Start Time</p>
                          <p className="text-base font-semibold text-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                            {venue.startTime}
                          </p>
                        </div>
                      </div>
                      <a
                        href={venue.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                        data-testid={`button-${venue.title.toLowerCase()}-location`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Get Directions</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-xl font-display text-foreground mb-4">Unplugged Ceremony</h3>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;