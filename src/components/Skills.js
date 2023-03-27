import React from 'react';
// import '../sass/_skills.scss';
const Skills = () => {
  return (
    <div className="skills">
      <div className="text">
        <h1 className="heading">
          s<span>kills</span> :
        </h1>
      </div>

      <div className="sk-cont">
        <div className="top" data-aos="fade-right">
          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="skill"
          />
        </div>
        <div className="bottom" data-aos="fade-left">
          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            alt="skill"
          />

          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="skill"
          />
          <img
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            alt="skill"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
