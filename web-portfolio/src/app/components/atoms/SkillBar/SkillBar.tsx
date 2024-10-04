"use client";
import { useEffect, useRef, useState } from "react";
type skill = {
  name: string;
  color: string;
  score: string;
}
interface SkillBarProps {
  children?: React.ReactNode;
  delay: number;
  skill: skill;
}

/**SkillBar */
export const SkillBar = ({ children, delay, skill }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.5 },
    );

    const currentSkillBarRef = skillBarRef.current;

    if (currentSkillBarRef) {
      observer.observe(currentSkillBarRef);
    }

    return () => {
      if (currentSkillBarRef) {
        observer.unobserve(currentSkillBarRef);
      }
    };
  }, [delay]);

  return (
    <div ref={skillBarRef} className="mb-4">
      <p
        className={`text-xl font-semibold text-gray-800 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </p>
      <div className="relative h-4 w-[500px] overflow-hidden rounded-md">
        <div className="absolute size-full bg-gray-200"></div>
        <div
          className={`absolute h-full bg-shadesOfBlue transition-all duration-700 ${isVisible ? skill.score : "w-0"}`}
        ></div>
      </div>
    </div>
  );
};
