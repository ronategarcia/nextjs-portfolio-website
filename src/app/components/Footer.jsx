import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/images/portfolio_logo.png"
                alt="logo"
                width={32}
                height={32}
                className="w-full h-full object-cover invert"
              />
            </div>
            <span className="text-foreground font-medium">Rodrigo</span>
          </Link>
          <p className="text-foreground-tertiary text-sm">
            &copy; {currentYear} Rodrigo Onate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
