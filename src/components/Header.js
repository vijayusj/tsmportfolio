import Background from './BackgroundA';

import img1 from '../assets/images/5295497.jpg';

import img3 from '../assets/images/animated.jpeg';
import mask from '../assets/images/sjmask_thumbnail.png';
import { FaLinkedin, FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
// scss

import TypeA from './TypeA';
const Header = () => {
  return (
    <div className="header">
      <div className="part">
        <Background ani="ll" />
      </div>

      <div className="cont">
        <h1>
          Hello this is vijay <span className="wave">👋🏻</span>
        </h1>
        <div className="content">
          <h2>I am A</h2>
          <TypeA />
        </div>
      </div>

      <div className="photo">
        <div className="inner">
          <div className="photo-side front">
            <img src={img3} alt="steve jobs" />
            <img src={mask} alt="mask" className="mask" />
          </div>
          <div className="photo-side back">
            <img src={img1} alt="steve jobs" />
          </div>
        </div>
      </div>

      <div className="links">
        <div className="icon li">
          <a
            href="https://www.linkedin.com/in/vijay-kinnera-94a3bb216/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FaLinkedin />
          </a>
        </div>
        <div className="icon git">
          <a
            href="https://github.com/vijayusj"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
        <div className="icon insta">
          <a
            href="https://www.instagram.com/vijay__tsm/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="icon leet">
          <a
            href="https://leetcode.com/Vijay_kinnera/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
