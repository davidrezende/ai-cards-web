import React from 'react';
import cardDefault from '../assets/nobg.jpg'
import Card from '../shared/types/CardVO';

type ListProps = {
  card: Card;
  onShowDialog: (card: Card) => void;
};

export const CardBox: React.FC<ListProps> = ({ card, onShowDialog }) => {
  const classRarity = `card-frame-background ${getColorClass(card?.rarity)}`;

  function getColorClass(color: string | undefined): string {
    const colorMap: Record<string, string> = {
      'STANDARD': 'standard',
      'UNUSUAL': 'unusual',
      'LEGENDARY': 'legendary',
      'MYTHIC': 'mythic',
      'RARE': 'rare'
    };

    return colorMap[color!] || '';
  }

  return (
    <>
      <div onClick={() => onShowDialog(card)} className=" hover:scale-125 card-shadow rounded-lg hover:animate-spin">
        <div className={`${classRarity} ${getColorClass(card?.rarity)} py-20 px-7 max-2xl:py-10 max-xl:py-9 max-2xl:px-4 bg-base-200 card shadow-xl w-full h-full" `}>
          <p className="font-bold truncate text-center text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap ">
            {card.name}
          </p>
          <img className="rounded-lg w-full p-10 max-2xl:p-3 max-lg:p-10 max-sm:p-2" src={!!!card || !!!card.image || !!!card.image.image ? cardDefault : 'data:image/jpeg;base64,' + card.image.image} alt={card.name} />
        </div>
      </div>
    </>
  )
}