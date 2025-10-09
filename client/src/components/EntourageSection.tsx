import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Parents of the Groom", names: ["Mr. Adonis H. Miel", "Mrs. Maria Nordina R. Miel"] },
      { label: "Parents of the Bride", names: ["Mr. Ignacio R. Bernardo", "Mrs. Basilia M. Bernardo"] }
    ],
    sonOfBride: { label: "Son of the Bride", name: "Mr. Roi Gabriele Santino Angelo Ayo" },
    principalSponsors: {
      title: "Principal Sponsors",
      men: [
        "Mr. Jeremy Bamba",
        "Mr. Arlene John U. Axalan",
        "Engr. Jessie Jaye Balbin",
        "Mr. Eufronio Aguilar",
        "Engr. Edison Padilla",
        "Dr. Jeffrey M. Corcuera",
        "Dr. Antonio S. Chua",
        "Dr. Dennis S. Alejandro",
        "Dr. Celso S. Ramos",
        "Dr. Eli R. Malaya Jr.",
        "Dr. Teddy C. Gonzales",
        "Mr. Jonathan Paul P. Yara",
        "Dr. Victor De Jesus",
        "Arch. Leovigildo M. Delos Santos",
        "Mr. Jose Isidro N. Camacho"
      ],
      women: [
        "Mrs. Lizette Tan Bamba",
        "Mrs. Grace Z. Axalan",
        "Dra. Teresita R. Oliva",
        "Dra. Lina D. Aguilar",
        "Dra. Rowena R. Padilla",
        "Mrs. Violeta C. Corcuera",
        "Mrs. Jane G. Chua",
        "Dra. Mariely P. Alejandro",
        "Dra. Virma Consuelo S. Ramos",
        "Mrs. Diana Jean C. Malaya",
        "Dra. Jennie Y. Gonzales",
        "Dra. Melissa Antonette A. Yara",
        "Mrs. Maria Nerissa R. De Jesus",
        "Dra. Joan Felipa D. Delos Santos",
        "Mrs. Maria Clara A. Camacho"
      ]
    },
    bestMan: { name: "Mr. Ferdinand Tolentino", role: "Best Man" },
    maidOfHonor: { name: "Ms. Ysabella Simone Angela B. Ayo", role: "Maid of Honor" },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", names: ["Mr. Archie M. Bernardo", "Ms. Joanna Maries M. Bernardo"] },
        { role: "Veil", names: ["Mr. Mel Alexander Kimhoko", "Ms. Soffia Margarita Angela B. Ayo"] },
        { role: "Cord", names: ["Mr. Joshua Baquiran", "Ms. Louise Basille Angela B. Ayo"] }
      ]
    },
    groomsmen: [
      "Mr. Edwin Pebenito",
      "Mr. Melvyn Bantog",
      "Mr. Salvador Paje Jr.",
      "Mr. Erwin Victolero",
      "Mr. Mark Tho M. Bernardo"
    ],
    bridesmaids: [
      "Mrs. Gladys M. Pebenito",
      "Mrs. Florie C. Bantog",
      "Mrs. Gladys M. Paje",
      "Mrs. Lalaine Mary Victolero",
      "Ms. Jennifer Bernardo",
      "Ms. Athena Cassandra T. Bernardo"
    ],
    bearers: [
      { role: "Bible Bearer", names: ["Samantha Ealish Senoreses"] },
      { role: "Ring Bearer", names: ["Prince Omar Ezhekiel Bernardo"] },
      { role: "Coin Bearer", names: ["Ralph Wesker Malolos-Jimeno"] }
    ],
    flowerGirls: [
      "Eliana Samara Senoreses"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue relative overflow-hidden py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-[10px] md:text-sm lg:text-base font-body text-foreground flex items-center justify-center gap-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                    {name === "Mr. Ignacio R. Bernardo" && <span className="text-xs md:text-sm">†</span>}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                Ninong (Godfather)
              </h4>
              {entourageData.principalSponsors.men.map((name, index) => (
                <p key={index} className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid={`principal-sponsor-men-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center">
              <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                Ninang (Godmother)
              </h4>
              {entourageData.principalSponsors.women.map((name, index) => (
                <p key={index} className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid={`principal-sponsor-women-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="flex flex-col items-center gap-3 md:gap-4 max-w-md mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center w-full" data-testid={`secondary-sponsor-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Son of the Bride */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="text-center" data-testid="son-of-bride-section">
            <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
              {entourageData.sonOfBride.label}
            </h3>
            <p className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid="son-of-bride-name">
              {entourageData.sonOfBride.name}
            </p>
          </div>
        </motion.div>

        {/* Best Man & Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.maidOfHonor.role}
              </h3>
              <p className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid="maid-of-honor-name">
                {entourageData.maidOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-[10px] md:text-sm lg:text-base font-body text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bridesmaids
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-[10px] md:text-sm lg:text-base font-body text-foreground mb-1 text-left" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="flex flex-col items-center gap-3 md:gap-4 max-w-md mx-auto">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center w-full" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg font-display font-semibold mb-1 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-[10px] md:text-sm lg:text-base font-body text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Girl */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.2 }}
        >
          <div className="text-center" data-testid="flower-girl-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girl
            </h3>
            {entourageData.flowerGirls.map((name, index) => (
              <p key={index} className="text-[10px] md:text-sm lg:text-base font-body text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;