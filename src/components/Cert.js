import React, { useState, useEffect } from 'react';
import { cert } from './utils';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Cert = () => {
  const length = cert.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(length - 1);
  const [nextIndex, setNextIndex] = useState(slideIndex + 1);

  function slider(direction) {
    // console.log('hii');
    if (direction === 'next') {
      setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
      // console.log('first');
    }

    // setPrevIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
    // setNextIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
    // console.log(prevIndex, slideIndex, nextIndex);
  }
  useEffect(() => {
    setPrevIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
    setNextIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  }, [slideIndex]);
  return (
    <div className="certificates">
      <div className="text">
        <h1 className="heading">
          certifi<span>cat</span>e<span>s</span> :
        </h1>
      </div>
      <div
        className="slide-container"
        data-aos="zoom-in-up"
        data-aos-offset="400"
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

export default Cert;
