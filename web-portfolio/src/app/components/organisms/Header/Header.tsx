import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { Menu } from "../../molecules/Menu";

interface HeaderProps {
  locale: LocaleTypes;
}

/**ヘッダーコンポーネント */
export const Header = ({ locale }: HeaderProps) => {
  return (
    <header className="p-2">
      <Menu locale={locale} />
    </header>
  );
};
