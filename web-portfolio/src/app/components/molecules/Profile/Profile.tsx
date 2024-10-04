import { useEffect, useRef, useState } from "react";

interface ProfileProps {
  whoT: string;
  who: string;
  profileSize: string;
  profileSubSize: string;
}

/**Profileコンポーネント */
export const Profile = ({ whoT, who, profileSize, profileSubSize }: ProfileProps) => {
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
      <div className={`mt-2 ${profileSize}`}>{whoT}</div>
      <p className={`my-3 w-96 ${profileSubSize} text-gray-500`}>
        {who}
      </p>
    </div>
  );
};
