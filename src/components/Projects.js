import { projects } from './utils';
import { FaEye, FaGithub } from 'react-icons/fa';
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="text">
        <h1 className="heading">
          pro
          <span>je</span>c<span>ts</span> :
        </h1>
      </div>
      <div className="projects">
        {projects.map(({ id, src, name, description, preview, sourceCode }) => {
          return (
            <div
              className="project"
              key={id}
              data-aos={`fade-down-${id % 2 === 0 ? 'left' : 'right'}`}
              // data-aos-offset="250"
            >
              {/* <div className="front face">
              <img src={pp} alt="dd" />
            </div>
            <div className="back  face">
              <p>back</p>
            </div> */}
              <div className="project-inner">
                <div className="front face">
                  <h2>{name}</h2>
                  <div className="image">
                    <img src={src} alt={name} />
                  </div>
                </div>
                <div className="back face">
                  <p>{description}</p>
                  <div className="links">
                    <a href={preview} target="_blank" rel="noreferrer">
                      <FaEye className="icon" />
                    </a>
                    <a href={sourceCode} target="_blank" rel="noreferrer">
                      {sourceCode ? <FaGithub className="icon" /> : ''}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
