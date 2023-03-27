import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      &copy;{`2020 - ${new Date().getFullYear()}`} Vijay_TSM . All rights
      reserved.
    </div>
  );
};

export default Footer;
