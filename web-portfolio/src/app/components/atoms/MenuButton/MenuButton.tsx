import type { LocaleTypes } from "@/utils/localization/locales/settings";
import Link from "next/link";

interface MeunButtonProps {
  children?: React.ReactNode;
  href: string;
  locale: LocaleTypes;
}

/**上位メニューテキスト */
export const MenuButton = ({ children, href, locale }: MeunButtonProps) => {
  return (
    <li className="px-10">
      <Link href={`${locale}/${href}`}>{children}</Link>
    </li>
  );
};
