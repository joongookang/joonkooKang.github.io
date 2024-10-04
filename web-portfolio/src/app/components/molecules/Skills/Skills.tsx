import { useEffect, useRef, useState } from "react";
import { SkillBar } from "../../atoms/SkillBar/SkillBar";

type skill = {
  name: string;
  color: string;
  score: string;
}

interface SkillsProps {
  SkillData: skill[];
}

/**Skillsコンポーネント */
export const Skills = ({ SkillData }: SkillsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    const currentSkillsBarRef = skillsRef.current;

    if (currentSkillsBarRef) {
      observer.observe(currentSkillsBarRef);
    }

    return () => {
      if (currentSkillsBarRef) {
        observer.unobserve(currentSkillsBarRef);
      }
    };
  }, []);

  return (
    <div
      ref={skillsRef}
      className={`ml-20 transition-transform duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
    >
      {SkillData.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} delay={index * 200}>
          {skill.name}
        </SkillBar>
      ))}
    </div>
  );
};
