import { HomeSubTitleText } from "../../atoms/HomeSubTitleText/HomeSubTitleText";

type test = {
  key: number;
  txt: string;
};

interface HomeSubTitleProps {
  data: test[];
  fontSize: string;
}

/**Homeサブタイトル */
export const HomeSubTitle = ({ data, fontSize }: HomeSubTitleProps) => {
  return (
    <div className="w-max py-4">
      <div className={`text-center ${fontSize}`}>
        I&apos;m Full-stack developer{" "}
        <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
          {data.map((txt) => (
            <HomeSubTitleText key={txt.key} delay={txt.key}>
              {txt.txt}
            </HomeSubTitleText>
          ))}
        </div>
      </div>
    </div>
  );
};
