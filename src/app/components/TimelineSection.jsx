"use client";
import React, { useState } from "react";

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

const TimelineSection = () => {
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

    // Calculate how far to slide based on distance from active
    const distance = index - activeIndex;
    const slideAmount = distance < 0 ? -150 : 150;
    const distanceMultiplier = Math.abs(distance);

    return {
      transform: `translateX(${slideAmount * distanceMultiplier}%) scale(0.6)`,
      opacity: 0,
    };
  };

  return (
    <div className="animate-on-scroll w-full h-full flex flex-col">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-foreground mb-2">
          My Journey
        </h2>
      </div>

      {/* Timeline container - needs enough height for bubbles */}
      <div className="relative flex-1 flex items-center">
        <div className={`relative w-full transition-all duration-500 ${activeIndex !== null ? 'overflow-hidden' : ''}`}>
          {/* Horizontal line - centered vertically */}
          <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 -translate-y-1/2 rounded-full transition-opacity duration-500 ${activeIndex !== null ? 'opacity-30' : ''}`} />

          {/* Timeline items container - with padding for bubbles */}
          <div className="relative flex justify-between items-center w-full py-24">
            {timelineData.map((item, index) => {
              const isActive = activeIndex === index;
              const itemStyle = getItemStyle(index);
              const isTop = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center transition-all duration-700 ease-out"
                  style={{
                    width: isActive ? '100%' : `${100 / timelineData.length}%`,
                    ...itemStyle,
                  }}
                >
                  {/* Collapsed state - node + bubble */}
                  {!isActive && (
                    <button
                      onClick={() => handleClick(index)}
                      className="relative flex flex-col items-center group"
                    >
                      {/* Top bubble */}
                      {isTop && (
                        <>
                          <div className="glass-card rounded-xl px-4 py-2 cursor-pointer group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all mb-3">
                            <span className="text-xs text-foreground-tertiary block">{item.year}</span>
                            <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.title}</span>
                          </div>
                          {/* Connector line */}
                          <div className="w-0.5 h-3 bg-primary-300 mb-1" />
                        </>
                      )}

                      {/* Node circle */}
                      <div className="w-5 h-5 rounded-full bg-primary-500 ring-4 ring-primary-100 shadow-lg group-hover:ring-primary-200 group-hover:scale-110 transition-all" />

                      {/* Bottom bubble */}
                      {!isTop && (
                        <>
                          {/* Connector line */}
                          <div className="w-0.5 h-3 bg-primary-300 mt-1" />
                          <div className="glass-card rounded-xl px-4 py-2 cursor-pointer group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all mt-3">
                            <span className="text-xs text-foreground-tertiary block">{item.year}</span>
                            <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.title}</span>
                          </div>
                        </>
                      )}
                    </button>
                  )}

                  {/* Expanded state - full card */}
                  {isActive && (
                    <button
                      onClick={() => handleClick(index)}
                      className="w-full max-w-2xl"
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
                            <div className="text-white/60 text-xs">
                              Click to close
                            </div>
                          </div>
                        </div>
                        <div className="p-6 text-left">
                          <ul className="space-y-3">
                            {item.description.map((point, i) => (
                              <li
                                key={i}
                                className="text-foreground-secondary text-base flex items-start gap-3"
                              >
                                <span className="text-primary-500 mt-1">•</span>
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
    </div>
  );
};

export default TimelineSection;
