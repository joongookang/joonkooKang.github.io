import { createTranslation } from "@/utils/localization/locales/server";
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
  data: test[];
}

/**Homeコンポーネント */
export const HomePage = async ({ locale, data }: HomePageProps) => {
  const { t } = await createTranslation(locale, "home");
  return (
    <div className="mb-32">
      <div className="flex h-screen flex-col items-center justify-center">
        <HomeTitle fontSize={t("fontTitleSize")} title={t("title")} />
        <HomeSubTitle data={data} fontSize={t("fontTitleSize")} />
        <HomeButton fontSize={t("fontSubSize")} />
      </div>
    </div>
  );
};
