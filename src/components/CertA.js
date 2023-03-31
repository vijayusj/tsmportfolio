import { useState } from 'react';
import { cert } from './utils';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const CertA = () => {
  const length = cert.length;
  const [slideIndex, setSlideIndex] = useState(0);

  function slider(direction) {
    if (direction === 'next') {
      setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
      // console.log('first');
    }
  }

  return (
    <div className="certificates">
      <div
        className="slide-container"
        data-aos="zoom-in-up"
        data-aos-offset="320"
      >
        <div className="slides">
          {cert.map(({ id, src, name }, index) => {
            return (
              <div
                key={id}
                className={slideIndex === index ? 'active ' : 'slide'}
              >
                <img src={src} alt={name} />
              </div>
            );
          })}
        </div>
        <div className="nav left" onClick={() => slider('prev')}>
          <FaArrowLeft className="left-icon" />
        </div>
        <div className="nav right" onClick={() => slider('next')}>
          <FaArrowRight className="right-icon" />
        </div>
      </div>
    </div>
  );
};

export default CertA;
