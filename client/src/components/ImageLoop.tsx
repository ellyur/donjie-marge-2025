import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images
const imageLoop1 = "https://res.cloudinary.com/dazghdddu/image/upload/v1759981193/Couple_gfwfd4.jpg";
const imageLoop2 = "https://res.cloudinary.com/dazghdddu/image/upload/v1759981192/cover1_p9oznv.jpg";
const imageLoop3 = "https://res.cloudinary.com/dazghdddu/image/upload/v1759981194/cover3_lpswqm.jpg";
const imageLoop4 = "https://res.cloudinary.com/dazghdddu/image/upload/v1759981194/prenup4_qm2otn.jpg";

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
