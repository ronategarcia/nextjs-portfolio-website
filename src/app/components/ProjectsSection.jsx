"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "HelpHub",
    description: "Tech support connections through private chats.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5c/15/24/5c15244f-6ac0-f0c7-9a05-4d411fa9503b/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/helphub-tech-support/id6757114253",
    releaseDate: "2025",
  },
  {
    id: 2,
    title: "ElderMotion",
    description: "Camera-based movement guidance for seniors.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b7/a0/90/b7a09069-bde5-b23a-e6f4-0c7b5ffc48bd/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/eldermotion/id6755412102",
    releaseDate: "2025",
  },
  {
    id: 3,
    title: "Wordly",
    description: "Vocabulary helper for students.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/99/ad/c6/99adc613-6db4-d544-83c9-66b6d8cbcf53/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/wordly-vocabulary-helper/id6755759058",
    releaseDate: "2025",
  },
  {
    id: 4,
    title: "Accomplit",
    description: "AI-driven accomplishment tracker.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/99/bd/e7/99bde78c-bdeb-9d08-ba6a-da8dbc46842e/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/accomplit/id6754618743",
    releaseDate: "2025",
  },
  {
    id: 5,
    title: "AceVenture",
    description: "Tennis training for kids with rewards.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f3/1f/05/f31f05e6-a187-97dc-c547-3639f0e2fcd7/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/aceventure/id6749724147",
    releaseDate: "2025",
  },
  {
    id: 6,
    title: "Healyx",
    description: "AI-powered health companion.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/24/e1/e4/24e1e4fc-e3f9-df32-5d1e-882b4d5ffa86/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/healyx/id6749298047",
    releaseDate: "Aug 2025",
  },
  {
    id: 7,
    title: "Eco-Chic",
    description: "Digital closet with AI outfit suggestions.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/79/86/96798677-1185-7a73-fbc5-83af0c630520/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/eco-chic/id6747948905",
    releaseDate: "Jun 2025",
  },
  {
    id: 8,
    title: "Self-Gen",
    description: "AI companion for personal growth.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ff/92/64/ff9264c0-c804-26b6-9e22-06f54c9c1604/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/self-gen/id6747273729",
    releaseDate: "Jun 2025",
  },
  {
    id: 9,
    title: "Carrt",
    description: "Smart grocery and recipe manager.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/73/3b/fd/733bfd39-7a5c-10c4-d254-6b8ab7f0e664/AppIcon-0-0-1x_U007emarketing-0-11-0-P3-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/carrt/id6746020844",
    releaseDate: "May 2025",
  },
  {
    id: 10,
    title: "FitMaster",
    description: "Weight loss and fitness companion.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/af/e9/8b/afe98b44-00ae-e7a9-26ca-aae7e36144ef/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/fitmaster-health-fitness/id6742673240",
    releaseDate: "Mar 2025",
  },
  {
    id: 11,
    title: "CareBridge",
    description: "AI healthcare assistant.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/39/03/4c/39034c64-321a-cb00-b409-008771aee88d/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/carebridge-health/id6741838323",
    releaseDate: "2025",
  },
  {
    id: 12,
    title: "Horsitask",
    description: "Equestrian management app.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a5/66/a8/a566a828-121d-db6a-71be-91bc364c78a2/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/horsitask/id6742119830",
    releaseDate: "Feb 2025",
  },
  {
    id: 13,
    title: "InstaCounsel",
    description: "AI-powered legal assistance.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ec/2e/a9/ec2ea99b-11d5-6dcb-d69c-05082fa3adbd/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/512x512bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/instacounsel/id6739327206",
    releaseDate: "2024",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={project.appStoreUrl}
      target="_blank"
      data-project-card
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 block"
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-5">
        <div className="relative w-28 h-28 rounded-[22px] overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <span className="text-sm text-foreground-tertiary">
            {project.releaseDate}
          </span>
        </div>
        <p className="text-foreground-secondary text-base leading-6 line-clamp-2 mb-3">
          {project.description}
        </p>
        <div className="flex items-center justify-between text-sm text-foreground-tertiary">
          <span className="px-3 py-1 rounded-full bg-white/70 border border-white/60">
            Flutter • iOS
          </span>
          <span className="text-accent font-medium">View on App Store</span>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [prevCount, setPrevCount] = useState(8);
  const gridRef = useRef(null);
  const visibleProjects = projectsData.slice(0, visibleCount);
  const canShowMore = visibleCount < projectsData.length;
  const canCollapse = visibleCount > 8;

  useEffect(() => {
    if (visibleCount > prevCount && gridRef.current) {
      // Calculate which row the new items start on
      const newItemsStartIndex = prevCount;
      const columns = window.innerWidth >= 1024 ? 4 : 2;
      const newRowIndex = Math.floor(newItemsStartIndex / columns);

      // Get all project cards
      const cards = gridRef.current.querySelectorAll('[data-project-card]');
      const firstNewCard = cards[newItemsStartIndex];

      if (firstNewCard) {
        setTimeout(() => {
          firstNewCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
    setPrevCount(visibleCount);
  }, [visibleCount, prevCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projectsData.length));
  };

  const handleShowFewer = () => {
    setVisibleCount(8);
    // Scroll to the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-on-scroll flex flex-col items-center w-full">
      <p className="text-foreground-secondary text-center mb-8 text-lg">
        {projectsData.length} Flutter apps on the App Store
      </p>
      <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {canShowMore && (
        <button
          type="button"
          onClick={handleShowMore}
          className="btn-primary mt-8"
        >
          Load more
        </button>
      )}
      {canCollapse && (
        <button
          type="button"
          onClick={handleShowFewer}
          className="btn-secondary mt-4"
        >
          Show fewer apps
        </button>
      )}
    </div>
  );
};

export default ProjectsSection;
