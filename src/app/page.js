"use client";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxBg = document.querySelector('.parallax-bg');
      if (parallaxBg) {
        const yPos = scrollY * 0.3;
        parallaxBg.style.backgroundPosition = `center ${yPos}px`;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen parallax-bg">
      <Navbar />

      <section id="home" className="h-screen w-full flex items-center justify-center pt-20">
        <div className="w-[80%]">
          <HeroSection />
        </div>
      </section>

      <section id="projects" className="min-h-screen w-full scroll-mt-[84px] pb-32">
        <div className="w-[80%] mx-auto pt-[20px]">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-center">Published Apps</h2>
          <div className="flex items-center justify-center min-h-[calc(100vh-180px)]">
            <ProjectsSection />
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen w-full scroll-mt-[84px]">
        <div className="w-[80%] mx-auto pt-[20px]">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-center">About Me</h2>
          <div className="flex items-center justify-center min-h-[calc(100vh-180px)]">
            <AboutSection />
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen w-full scroll-mt-[84px]">
        <div className="w-[80%] mx-auto pt-[20px]">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-center">Get In Touch</h2>
          <div className="flex items-center justify-center min-h-[calc(100vh-180px)]">
            <EmailSection />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
