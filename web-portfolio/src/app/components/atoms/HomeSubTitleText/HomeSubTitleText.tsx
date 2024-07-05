interface HomeSubTitleTextProps {
  children?: React.ReactNode;
  delay: number;
}

/**HomeSubTitleテキスト */
export const HomeSubTitleText = ({
  children,
  delay,
}: HomeSubTitleTextProps) => {
  let test = "animate-word";

  if (delay !== 0) {
    test = test + "-delay-" + delay;
  }

  return (
    <span className={`${test} col-span-full row-span-full`}>{children}</span>
  );
};
