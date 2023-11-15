import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent 
      border-r-transparent border-b-transparent text-white mb-auto">
      <div className="container flex p-2 justify-between">
        <Image
          src="/images/logo-image.png"
          alt="logo image"
          width={150}
          height={150}
          className="ml-10"
        />
        <p className="text-slate-600 mt-10 mr-12 md:mr-2">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
