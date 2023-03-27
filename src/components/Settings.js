import { useEffect, useState } from 'react';
import { FiSettings } from 'react-icons/fi';
// import '../sass/_settings.scss';
const Settings = () => {
  const [theme, setTheme] = useState('dark');
  const [spin, setSpin] = useState(false);
  function openSpin() {
    setSpin(!spin);
    console.log('vijay');
    // document.querySelector('.settings').classList.toggle('open');
  }
  function changeTheme(e) {
    // console.log(e.target.value);
    document.querySelector('.main').dataset.theme = e.target.value;
    setTheme(e.target.value);
  }
  useEffect(() => {}, [theme, spin]);
  return (
    <div className={`settings ${spin ? 'open' : ''}`}>
      <button className="toggle" onClick={openSpin}>
        <FiSettings className="ss" />
      </button>
      <div className="colors" onClick={changeTheme}>
        <button className="color dark" value="dark"></button>
        <button className="color light" value="light"></button>
        <button className="color blu" value="blue"></button>
      </div>
    </div>
  );
};

export default Settings;
