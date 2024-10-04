"use client";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  title: string;
  d: string;
  description: string;
  delay: number;
  fontTSize: string;
  fontSize: string;
}

/**メニューコンポーネント */
export const Card = ({ title, d, description, delay, fontTSize, fontSize }: CardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative m-4 h-60 w-64 rounded-lg bg-white shadow-md transition-opacity duration-700 ease-in-out hover:scale-105 hover:shadow-xl hover:ring hover:ring-shadesOfBlue dark:bg-shadesOfBlue dark:hover:ring-white ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="absolute -inset-y-14 inset-x-0 mx-auto flex size-28 items-center justify-center rounded-full border-4 border-slate-200 bg-shadesOfBlue duration-300 group-hover:bg-white group-hover:shadow-md dark:border-slate-800 dark:group-hover:bg-shadesOfBlue">
        <span className="text-3xl text-white duration-300 group-hover:text-shadesOfBlue md:text-5xl dark:text-slate-800 dark:group-hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-10"
          >
            <path d={d} />
          </svg>
        </span>
      </div>
      <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center p-4">
        <div>
          <h2 className={`my-8 ${fontTSize} font-bold capitalize text-shadesOfBlue dark:text-slate-800`}>
            {title}
          </h2>
        </div>
        <div>
          <p className={`text-center ${fontSize} dark:text-white`}>{description}</p>
        </div>
      </div>
    </div>
  );
};
