"use client";

import { Title } from "../../atoms/Title/Title";
import { CardMenu } from "../../molecules/CardMenu/CardMenu";
import { Profile } from "../../molecules/Profile/Profile";
import { Skills } from "../../molecules/Skills/Skills";

type Card = {
  key: number;
  d: string;
  title: string;
  description: string;
};

interface AboutPageProps {
  cardData: Card[];
}

const SkillData = [
  "CSS /HTML /JavaScript",
  "React",
  "NextJS",
  "Node.js",
  "C#",
  ".net",
  "Python",
];

/**Aboutコンポーネント */
export const AboutPage = ({ cardData }: AboutPageProps) => {
  return (
    <div className="mb-10">
      <div className="flex h-screen flex-col items-center bg-white">
        <div className="lg:px-30 mx-auto w-screen p-6 sm:px-8 dark:bg-slate-800">
          <Title color="text-shadesOfBlue">ABOUT</Title>
          <CardMenu cardData={cardData} />
          <div className="mx-auto flex w-full items-center justify-center">
            <Profile />
            <Skills SkillData={SkillData} />
          </div>
        </div>
      </div>
    </div>
  );
};
