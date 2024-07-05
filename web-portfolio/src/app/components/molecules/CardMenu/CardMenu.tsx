import { Card } from "../Card/Card";

type Card = {
  key: number;
  d: string;
  title: string;
  description: string;
};

interface CardMenuProps {
  cardData: Card[];
}

/**メニューコンポーネント */
export const CardMenu = ({ cardData }: CardMenuProps) => {
  return (
    <div className="mx-auto my-16 grid w-fit grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map((card, index) => (
        <Card
          key={card.key}
          d={card.d}
          title={card.title}
          description={card.description}
          delay={index * 200} // 各カードに遅延を設定
        />
      ))}
    </div>
  );
};
