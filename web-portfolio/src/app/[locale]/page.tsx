import { createTranslation } from "@/utils/localization/locales/server";
import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { locales } from "@/utils/localization/locales/settings";
import { HomeBackground } from "../components/atoms/HomeBackground/HomeBackground";
import { AboutPage } from "../components/templates/AboutPage/AboutPage";
import { HomePage } from "../components/templates/HomePage/HomePage";
import { Title } from "../components/atoms/Title/Title";

export const generateStaticParams = async () => {
  return locales.map((locale) => ({
    locale,
  }));
};

const data = [
  {
    key: 0,
    txt: "Website",
  },
  {
    key: 1,
    txt: "Game",
  },
  {
    key: 2,
    txt: "UWP",
  },
  {
    key: 3,
    txt: "App",
  },
  {
    key: 4,
    txt: "AI",
  },
];

export default async function Home({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "home");

  const cardData = [
    {
      key: 0,
      d: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
      title: "Fast",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      key: 1,
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125",
      title: "raphic design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      key: 2,
      d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
      title: "UI/UX design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      key: 3,
      d: "M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 0 1-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5",
      title: "UI/UX design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <main className="">
        <HomeBackground />
        <div className="relative">
          <HomePage locale={locale} t={t} data={data} />
          <AboutPage cardData={cardData} />
          <div className="mb-16">
            <div className="flex h-screen flex-col items-center bg-gray-50">
              <div className="lg:px-30 mx-auto w-screen p-6 sm:px-8 dark:bg-slate-800">
                <Title color="text-balck">Work</Title>
              </div>
            </div>
          </div>
          <div className=" flex h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
            <h2 className="text-4xl font-bold">The Fourth slide</h2>
          </div>
        </div>
      </main>
    </>
  );
}
