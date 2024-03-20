import React from 'react';
import cardDefault from '../assets/nobg.png'
import Card from '../shared/types/CardVO';

type ListProps = {
  card: Card;
  onShowDialog: (card: Card) => void;
};

export const CardBox: React.FC<ListProps> = ({ card, onShowDialog }) => {
  const classRarity = `card-frame-background-menu ${getColorClass(card?.rarity)}`;

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
      <div onClick={() => onShowDialog(card)} className="flex items-center justify-center hover:scale-125 pb-3 hover:animate-spin">
        <div className={`${classRarity} ${getColorClass(card?.rarity)}  2xl:p-10 p-3 rounded-box border-solid border-2 bg-base-200 border-gray-700 card shadow-xl w-full h-full"`}>
          <p className="font-bold truncate text-center pb-2 text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap ">
            {card.name}
          </p>
          <img className="rounded-box" src={!!!card || !!!card.image || !!!card.image.image ? cardDefault : 'data:image/jpeg;base64,' + card.image.image} alt={card.name} />
        </div>
      </div>
    </>
  )
}