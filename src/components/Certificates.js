import React from 'react';
import { cert } from './utils';
const Certificates = () => {
  return (
    <div className="cerf">
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

export default Certificates;
