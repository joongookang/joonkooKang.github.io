interface HomeTitleProps {
  t: (key: string) => string;
}

/**Homeのタイトル */
export const HomeTitle: React.FC<HomeTitleProps> = ({ t }) => {
  return (
    <div className="font-dotGothic16 relative flex w-max text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
      {t("title")}
    </div>
  );
};
