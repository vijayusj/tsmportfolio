import { useEffect, useState, useRef } from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import ad from '../assets/audio/Cornfield_Chase_Piano_Interstellar-646455.mp3';
const Settings = () => {
  const audioEle = useRef();

  const [play, setPlay] = useState(true);
  const [theme, setTheme] = useState(true);
  const [spin, setSpin] = useState(false);
  const handler = () => {
    setPlay(!play);
  };

  useEffect(() => {
    if (play) {
      audioEle.current.play();
    } else {
      audioEle.current.pause();
    }
    // console.log('11');
  }, [play]);
  function openSpin() {
    setSpin(!spin);
    // console.log('vijay');
    // document.querySelector('.settings').classList.toggle('open');
  }

  function themeHandler() {
    setTheme(!theme);
    // console.log(theme);
  }
  useEffect(() => {
    document.querySelector('.main').dataset.theme = theme ? 'dark' : 'light';
    // console.log(theme);
  }, [theme]);
  return (
    <div className={`settings ${spin ? 'open' : ''}`}>
      <button className="toggle" onClick={openSpin}>
        <FiSettings className="ss" />
      </button>
      <div className=" se">
        <button className="mode" onClick={themeHandler}>
          {theme ? (
            <BsFillSunFill className="ic light" />
          ) : (
            <BsFillMoonFill className="ic" />
          )}
        </button>
        <div>
          <audio src={ad} ref={audioEle} />
          <button className="music" onClick={handler}>
            {play ? (
              <FaVolumeMute className=" mute" />
            ) : (
              <FaVolumeUp className=" play" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
