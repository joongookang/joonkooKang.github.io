import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { HomeButton } from "../../atoms/HomeButton/HomeButton";
import { HomeTitle } from "../../atoms/HomeTitle/HomeTitle";
import { HomeSubTitle } from "../../molecules/HomeSubTitle/HomeSubTitle";
import { Header } from "../../organisms/Header/Header";

type test = {
  key: number;
  txt: string;
};

interface HomePageProps {
  locale: LocaleTypes;
  t: (key: string) => string;
  data: test[];
}

/**Homeコンポーネント */
export const HomePage = ({ locale, t, data }: HomePageProps) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header locale={locale} />
      </div>
      <div className="flex h-screen flex-col items-center justify-center">
        <HomeTitle t={t} />
        <HomeSubTitle data={data} />
        <HomeButton />
      </div>
    </>
  );
};
