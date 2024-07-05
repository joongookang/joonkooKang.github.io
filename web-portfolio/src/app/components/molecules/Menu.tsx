import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { LanguageButton } from "../atoms/LanguageButton/LanguageButton";
import { MenuButton } from "../atoms/MenuButton/MenuButton";

interface MenuProps {
  locale: LocaleTypes;
}

/**メニューコンポーネント */
export const Menu = ({ locale }: MenuProps) => {
  return (
    <ul className="flex px-24 font-mono text-lg">
      <MenuButton href="" locale={locale}>
        Home
      </MenuButton>
      <MenuButton href="/PROFILE" locale={locale}>
        PROFILE
      </MenuButton>
      <MenuButton href="/WORK" locale={locale}>
        WORK
      </MenuButton>
      <MenuButton href="/SNS" locale={locale}>
        SNS
      </MenuButton>
      <LanguageButton locale={locale} />
    </ul>
  );
};
