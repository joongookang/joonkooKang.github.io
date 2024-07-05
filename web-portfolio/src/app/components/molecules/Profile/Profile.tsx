import { useEffect, useRef, useState } from "react";

/**Profileコンポーネント */
export const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

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
    const currentProfileRef = profileRef.current;
    if (currentProfileRef) {
      observer.observe(currentProfileRef);
    }

    return () => {
      if (currentProfileRef) {
        observer.unobserve(currentProfileRef);
      }
    };
  }, []);

  return (
    <div
      ref={profileRef}
      className={`flex flex-col items-center justify-center text-center transition-transform duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
    >
      <img
        src="https://cdni.iconscout.com/illustration/free/thumb/free-character-2671505-2218144.png?f=webp&w=1080"
        alt="User Profile"
        className="xs:size-32 rounded-full object-cover shadow-xl outline outline-2 outline-offset-2 outline-shadesOfBlue sm:size-40 md:size-48 lg:size-64 xl:size-64"
      />
      <div className="mt-2 text-4xl">Who&apos;s this guy?</div>
      <p className="my-3 w-96 text-base text-gray-500">
        I&apos;m a Front-End Developer for ChowNow in Los Angeles, CA. I have
        serious passion for UI effects, animations and creating intuitive,
        dynamic user experiences. Let&apos;s make something special.
      </p>
    </div>
  );
};
