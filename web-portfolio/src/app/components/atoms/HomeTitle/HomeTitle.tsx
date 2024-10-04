interface HomeTitleProps {
  fontSize: string;
  title: string;
}

/**Homeのタイトル */
export const HomeTitle: React.FC<HomeTitleProps> = ({ fontSize, title }) => {
  return (
    <div
      className={`relative flex w-max ${fontSize} before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black`}
    >
      {title}
    </div>
  );
};
