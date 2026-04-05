"use client";
import React, { useState } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Flutter", "Dart", "React", "Next.js", "Tailwind CSS",
      "JavaScript", "Git", "Python", "Java", "C++"
    ],
  },
  {
    title: "Education",
    id: "education",
    content: ["B.S. Computer Science - Cal State Fullerton"],
  },
];

const timelineData = [
  {
    year: "2024",
    title: "Flutter Developer",
    description: [
      "Building and publishing mobile apps",
      "13+ apps on the App Store",
      "Focus on AI-powered solutions",
    ],
  },
  {
    year: "2023",
    title: "B.S. Computer Science",
    description: [
      "Cal State Fullerton",
      "Graduated with honors",
      "Software engineering focus",
    ],
  },
  {
    year: "2022",
    title: "Web Development",
    description: [
      "React & Next.js projects",
      "Open source contributions",
      "Frontend specialization",
    ],
  },
  {
    year: "2021",
    title: "CS Foundations",
    description: [
      "Data structures & algorithms",
      "Object-oriented programming",
      "Started coding journey",
    ],
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getItemStyle = (index) => {
    if (activeIndex === null) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
      };
    }

    if (index === activeIndex) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 20,
      };
    }

    const distance = index - activeIndex;
    const slideAmount = distance < 0 ? -150 : 150;
    const distanceMultiplier = Math.abs(distance);

    return {
      transform: `translateX(${slideAmount * distanceMultiplier}%) scale(0.6)`,
      opacity: 0,
    };
  };

  return (
    <div className="w-full mt-16">
      <h3 className="text-2xl font-semibold text-foreground mb-10 text-center">My Journey</h3>

      {/* Timeline container */}
      <div className="relative">
        {/* Horizontal line */}
        <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 -translate-y-1/2 rounded-full transition-opacity duration-500 ${activeIndex !== null ? 'opacity-30' : ''}`} />

        {/* Timeline items */}
        <div className="relative flex justify-between items-center w-full" style={{ height: '220px' }}>
          {timelineData.map((item, index) => {
            const isActive = activeIndex === index;
            const itemStyle = getItemStyle(index);
            const isTop = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex items-center justify-center transition-all duration-700 ease-out h-full"
                style={{
                  width: isActive ? '100%' : `${100 / timelineData.length}%`,
                  ...itemStyle,
                }}
              >
                {/* Collapsed state */}
                {!isActive && (
                  <button
                    onClick={() => handleClick(index)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    {/* The dot - centered on the line */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-500 ring-4 ring-primary-100 shadow-lg group-hover:ring-primary-200 group-hover:scale-110 transition-all z-10" />

                    {/* Top bubble */}
                    {isTop && (
                      <div className="absolute bottom-1/2 mb-6 flex flex-col items-center">
                        <div className="glass-card rounded-xl px-4 py-2.5 cursor-pointer group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all">
                          <span className="text-sm text-foreground-tertiary block">{item.year}</span>
                          <span className="text-base font-medium text-foreground whitespace-nowrap">{item.title}</span>
                        </div>
                        <div className="w-0.5 h-4 bg-primary-300 mt-1" />
                      </div>
                    )}

                    {/* Bottom bubble */}
                    {!isTop && (
                      <div className="absolute top-1/2 mt-6 flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-primary-300 mb-1" />
                        <div className="glass-card rounded-xl px-4 py-2.5 cursor-pointer group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all">
                          <span className="text-sm text-foreground-tertiary block">{item.year}</span>
                          <span className="text-base font-medium text-foreground whitespace-nowrap">{item.title}</span>
                        </div>
                      </div>
                    )}
                  </button>
                )}

                {/* Expanded state */}
                {isActive && (
                  <button
                    onClick={() => handleClick(index)}
                    className="w-full max-w-lg px-4"
                  >
                    <div className="glass-card rounded-2xl overflow-hidden w-full animate-zoom-in">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <span className="text-white/80 text-sm">{item.year}</span>
                            <h3 className="text-white font-semibold text-xl">
                              {item.title}
                            </h3>
                          </div>
                          <div className="text-white/60 text-sm">
                            Click to close
                          </div>
                        </div>
                      </div>
                      <div className="p-5 text-left">
                        <ul className="space-y-3">
                          {item.description.map((point, i) => (
                            <li
                              key={i}
                              className="text-foreground-secondary text-base flex items-start gap-3"
                            >
                              <span className="text-primary-500 mt-0.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <div className="animate-on-scroll w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20 scale-110" />
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden glass-card">
              <Image
                src="/images/hero-image.png"
                alt="Rodrigo Onate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-foreground-secondary mb-6 text-lg leading-relaxed">
            Mobile and front-end developer specializing in Flutter.
            Published 13+ apps on the App Store. Always learning and building.
          </p>

          <div className="flex gap-3 mb-5">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => setTab(tabItem.id)}
                className={`px-5 py-2.5 rounded-full text-base font-medium transition-all ${
                  tab === tabItem.id
                    ? "bg-primary-500 text-white"
                    : "bg-white/60 text-foreground-secondary hover:bg-white"
                }`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          <div className="glass-card rounded-xl p-5">
            {tab === "skills" ? (
              <div className="flex flex-wrap gap-3">
                {TAB_DATA.find((t) => t.id === "skills").content.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-primary-50 text-primary-600 rounded-lg text-base font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-foreground-secondary text-base">
                {TAB_DATA.find((t) => t.id === tab).content[0]}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Timeline integrated here */}
      <Timeline />
    </div>
  );
};

export default AboutSection;
