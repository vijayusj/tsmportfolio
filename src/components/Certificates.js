import { useState } from 'react';
import CertA from './CertA';
import CertB from './CertB';

const Certificates = () => {
  const [view, setView] = useState(true);
  return (
    <div className="cert-container">
      <div className="heading">
        <div className="text">
          <h1 className="heading">
            certifi<span>cat</span>e<span>s</span>:
          </h1>
        </div>
        <button className="view" onClick={() => setView(!view)}>
          change <span className="ani">👀</span>
        </button>
      </div>
      {view ? <CertA /> : <CertB />}
    </div>
  );
};

export default Certificates;
