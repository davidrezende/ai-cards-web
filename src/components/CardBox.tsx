import React, { useState } from 'react';
import cardDefault from '../assets/magonegro.png'
import Image from '../shared/types/ImageVO';
import Attribute from '../shared/types/AttributeVO';
import Card from '../shared/types/CardVO';

type ListProps = {
  card: Card;
  onShowDialog: (card: Card) => void;
};

export const CardBox: React.FC<ListProps> = ({ card, onShowDialog }) => {

  return (
    <>
      <div onClick={() => onShowDialog(card)} className=" flex items-center justify-center hover:scale-125">
        <div className="p-4 rounded-lg border-solid border-2 bg-base-200 border-gray-700 card shadow-xl w-full h-full ">
          <p className='font-bold truncate text-center pb-2'>{card.name}</p>
          <figure><img className="rounded-lg" src={!!!card || !!!card.image || !!!card.image.image ? cardDefault : 'data:image/jpeg;base64,' + card.image.image} alt={card.name} /></figure>
          {/* <p>{card.description}</p>
          <ul className="list-none">
            <li>FORÇA: {card.attributes.FORCA}</li>
            <li>DESTREZA: {card.attributes.DESTREZA}</li>
            <li>VITALIDADE: {card.attributes.VITALIDADE}</li>
            <li>INTELIGENCIA: {card.attributes.INTELIGENCIA}</li>
          </ul> */}
        </div>
      </div>
    </>
  )
}