import { useEffect, useRef, useState } from 'react';
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import BackgroundA from './BackgroundA';
const Form = () => {
  const [blast, setBlast] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gpkukfx',
        'template_obb55ah',
        form.current,
        'w4QFj0t1HaMHaLBI7'
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    const ad = document.querySelector('.mit');
    ad.classList.add('sub');
    setBlast(true);
    e.target.reset();
    setTimeout(() => {
      setBlast(false);
      ad.classList.remove('sub');
    }, [7000]);
  };

  return (
    <div className="container">
      <div className="text">
        <h1 className="heading">
          Cont<span>act</span> :
        </h1>
      </div>
      <div className="ani">
        {blast && <BackgroundA ani="" />}
        {/* <BackgroundA ani="" /> */}
      </div>

      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="inputt">
            <input type="text" name="name" required />
            <span className="underline"></span>
            <span className="flash"></span>
            <label>Name</label>
          </div>
          <div className="inputt">
            <input type="email" name="email" required />
            <span className="underline"></span>
            <span className="flash"></span>
            <label>Email</label>
          </div>
          <div className="inputt">
            <input type="tel" name="contact" />
            <span className="underline"></span>
            <span className="flash"></span>
            <label>Contact</label>
          </div>
          <div className="inputt">
            <input type="text" name="message" />
            <span className="underline"></span>
            <span className="flash"></span>
            <label>Message</label>
          </div>
          <div className="last">
            <button type="submit">Submit</button>
          </div>
          <div className="mit">
            <h3>Thanks for reaching out</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
