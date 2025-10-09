import { motion } from 'framer-motion';

const principalSponsorsImage = "https://res.cloudinary.com/dazghdddu/image/upload/v1759983453/guests_omggth.png";
const guestsImage = "https://res.cloudinary.com/dazghdddu/image/upload/v1759982952/guests_hqo0pg.png";
import flower9 from '@assets/flower9_1759741371017.png';
import flower3 from '@assets/flower3_1759741371015.png';

const DressCodeSection = () => {
  const principalSponsorsColors = [
    { name: 'Sage Green', color: '#9CAF88', hex: '#9CAF88' },
    { name: 'Dusty Pink', color: '#DCAE96', hex: '#DCAE96' },
    { name: 'Burgundy', color: '#800020', hex: '#800020' }
  ];

  const guestsColors = [
    { name: 'Beige', color: '#F5F5DC', hex: '#F5F5DC' },
    { name: 'Light Brown', color: '#D2B48C', hex: '#D2B48C' },
    { name: 'Brown', color: '#964B00', hex: '#964B00' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              {/* Flower Decoration */}
              <img src={flower9} alt="" className="absolute top-2 right-2 w-16 md:w-20 opacity-80" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <div className="space-y-3 text-left px-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Ninong (Godfather):</p>
                        <p className="text-sm text-foreground">Black Suit and Black Tie</p>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-foreground mb-2">Ninang (Godmother):</p>
                        <p className="text-sm text-foreground">Sage Green</p>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-foreground mb-2">Bridesmaids:</p>
                        <p className="text-sm text-foreground">Dusty Pink / Burgundy</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
                
                <div className="mt-6">
                  <p className="text-sm text-foreground mb-4 text-center">Color Palette</p>
                  <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                    {principalSponsorsColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 mx-auto rounded-full border-2 border-border shadow-sm hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-2">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              {/* Flower Decoration */}
              <img src={flower3} alt="" className="absolute top-2 left-2 w-20 md:w-24 opacity-80 transform -rotate-12" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <p className="text-sm text-foreground px-4 mb-3">
                      We would love to see you in<br />
                      <span className="font-semibold">Formal Dresses</span><br />
                      in the color palette specified below.
                    </p>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
                
                <div className="mt-6">
                  <p className="text-sm text-foreground mb-4 text-center">Color Palette</p>
                  <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                    {guestsColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 mx-auto rounded-full border-2 border-border shadow-sm hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-2">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modern Additional Guidelines */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <motion.h3 
            className="text-xl font-body font-medium text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 9.2 }}
          >
            Additional Guidelines
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { 
                title: "Ninong (Godfather)", 
                description: "Black Suit and Black Tie",
                delay: 9.4
              },
              { 
                title: "Ninang (Godmother)", 
                description: "Sage Green",
                delay: 9.5
              },
              { 
                title: "Bridesmaids", 
                description: "Dusty Pink / Burgundy",
                delay: 9.6
              },
              { 
                title: "Guests", 
                description: "Formal Dresses in Beige and Light Brown",
                delay: 9.7
              }
            ].map((guideline, index) => (
              <motion.div 
                key={index}
                className="bg-card/20 rounded-xl p-4 border border-border/50 hover:bg-card/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: guideline.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{guideline.title}</h4>
                    <p className="text-foreground text-sm leading-relaxed">{guideline.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;