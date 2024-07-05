"use client";

import type { LocaleTypes } from "@/utils/localization/locales/settings";
import { locales } from "@/utils/localization/locales/settings";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LanguageButtonProps {
  locale: LocaleTypes;
}

/**LanguageButton */
export const LanguageButton = ({ locale }: LanguageButtonProps) => {
  const [currentLang, setCurrentLang] = useState<LocaleTypes>(locale);
  const router = useRouter();

  const changeLanguage = () => {
    const nextLang =
      locales[(locales.indexOf(currentLang) + 1) % locales.length];
    setCurrentLang(nextLang);
    router.push(`/${nextLang}`);
  };

  return (
    <>
      <button
        className="absolute right-5 self-center text-lg"
        onClick={changeLanguage}
      >
        {currentLang.toUpperCase()}
      </button>
    </>
  );
};
