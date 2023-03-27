import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Cert from './components/Cert';
import Form from './components/Form';
import Footer from './components/Footer';
// import './sass/_mainstyles.scss';
// import './sass/_variables.scss';
import './sass/main.scss';
//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      offset: window.innerWidth < 900 ? 95 : 230,
    });
  }, []);
  return (
    <div className="main" data-theme="dark">
      <Settings />
      {/* <Navigation /> */}
      <Header />
      <Skills />
      <Projects />
      {/* <Certificates /> */}
      <Cert />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
