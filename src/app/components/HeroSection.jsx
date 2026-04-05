"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="animate-on-scroll text-center">
      <h1 className="text-foreground mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-semibold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
          Hi, I&apos;m{" "}
        </span>
        <TypeAnimation
          sequence={[
            'Rodrigo',
            1500,
            'a Flutter Dev',
            1500,
            'a Mobile Dev',
            1500,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="font-bold"
        />
      </h1>
      <p className="text-foreground-secondary text-xl sm:text-2xl md:text-3xl mb-10 max-w-2xl mx-auto font-medium">
        Building beautiful mobile apps with Flutter
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="#contact"
          className="btn-primary inline-flex items-center justify-center text-xl px-10 py-4 font-semibold"
        >
          Hire Me
        </Link>
        <Link
          href="https://docs.google.com/document/d/1ZUxzGkOURR_TlLCRtZfGp7r7ULP5vmWdFyj9F3LEMQU/edit?usp=sharing"
          target="_blank"
          className="btn-secondary inline-flex items-center justify-center text-xl px-10 py-4 font-semibold"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
