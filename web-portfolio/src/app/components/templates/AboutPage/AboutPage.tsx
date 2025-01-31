"use client";

import { Title } from "../../atoms/Title/Title";
import { CardMenu } from "../../molecules/CardMenu/CardMenu";
import { Profile } from "../../molecules/Profile/Profile";
import { Skills } from "../../molecules/Skills/Skills";
import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { createTranslation } from "@/utils/localization/locales/server";

interface AboutPageProps {
  locale: LocaleTypes;
}

const SkillData = [
  {
    name: "CSS /HTML /JavaScript",
    color: "bg-[#F0DB4F]",
    score: "w-[95%]"
  },
  {
    name: "React",
    color: "bg-[#61DAFB]",
    score: "w-[95%]"
  },
  {
    name: "NextJS",
    color: "bg-[#000000]",
    score: "w-[95%]"
  },
  {
    name: "Node.js",
    color: "bg-[#68A063]",
    score: "w-[90%]"
  },
  {
    name: "C#",
    color: "bg-[#68217A]",
    score: "w-[80%]"
  },
  {
    name: ".NET",
    color: "bg-[#512BD4]",
    score: "w-[90%]"
  },
  {
    name: "Python",
    color: "bg-[#306998]",
    score: "w-[70%]"
  },
]

/**Aboutコンポーネント */
export const AboutPage = async ({
  locale,
}: AboutPageProps) => {
  const { t } = await createTranslation(locale, "about");
  const cardData = [
    {
      key: 0,
      d: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
      title: "Diversity",
      description: t("Diversity"),
    },
    {
      key: 1,
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125",
      title: "Cop-work",
      description: t("Cop-work"),
    },
    {
      key: 2,
      d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
      title: "UI/UX design",
      description: t("UI/UX Design"),
    },
    {
      key: 3,
      d: "M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 0 1-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5",
      title: "Fast",
      description: t("Fast"),
    },
  ];

  return (
    <div className="mb-72">
      <div className="flex h-screen flex-col items-center justify-center">
        <Title color="text-shadesOfBlue" fontSize={t("fontTSize")}>
          ABOUT
        </Title>
        <CardMenu cardData={cardData} fontTSize={t("fontTSize")} fontSize={t("fontSize")} />
        <div className="mx-auto flex w-full items-center justify-center">
          <Profile who={t("who")} whoT={t("whoT")} profileSize={t("profileSize")} profileSubSize={t("fontSize")} />
          <Skills SkillData={SkillData} />
        </div>
      </div>
    </div>
  );
};
