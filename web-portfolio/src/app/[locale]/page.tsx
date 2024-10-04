import { createTranslation } from "@/utils/localization/locales/server";
import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { locales } from "@/utils/localization/locales/settings";
import { HomeBackground } from "../components/atoms/HomeBackground/HomeBackground";
import { AboutPage } from "../components/templates/AboutPage/AboutPage";
import { HomePage } from "../components/templates/HomePage/HomePage";
import { WorkPage } from "../components/templates/WorkPage/WorkPage";
import ReadingProgress from "../components/atoms/ReadingProgress/ReadingProgress";
import { Header } from "../components/organisms/Header/Header";

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

  return (
    <>
      <main className="">
        <ReadingProgress />
        <HomeBackground />
        <div className="relative">
          <div className="sticky top-0 z-50">
            <Header locale={locale} />
          </div>
          <HomePage locale={locale} data={data} />
          <AboutPage
            locale={locale}
          />
          <WorkPage
            locale={locale}
          />
        </div>
      </main>
    </>
  );
}
