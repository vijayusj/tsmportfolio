import React from 'react';
import { cert } from './utils';
const CertB = () => {
  return (
    <div className="cerf" data-aos="zoom-in-up" data-aos-offset="300">
      {/* <div className="text">
        <h1 className="heading">
          certifi<span>cat</span>e<span>s</span> :
        </h1>
      </div> */}
      <ul>
        {cert.map(({ id, src, name }) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
              <img src={src} alt="cerf" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CertB;
