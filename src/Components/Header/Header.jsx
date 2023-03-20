import React, { useEffect } from 'react';
import './Header.scss';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("myHeader");
      const sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="header" id="myHeader">
        <a href="#default" class="logo">Hello Wallet</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Send</a>
          <a href="#about">Recieve</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
