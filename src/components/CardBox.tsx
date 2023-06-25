import React from 'react';
import cardDefault from '../assets/magonegro.png'
import Image from '../shared/types/ImageVO';
import Attribute from '../shared/types/AttributeVO';
type ListProps = {
  name: string;
  imageBase64: Image;
  attributes: Attribute;
};


export const CardBox: React.FC<ListProps> = ({ name, imageBase64, attributes }) => {
  console.log(attributes)

  return (
    <div className=" flex items-center justify-center hover:scale-125">
      <div className="p-4 rounded-lg border-solid border-2 bg-base-200 border-gray-700 card shadow-xl w-full h-full ">
        <p className='font-bold truncate text-center pb-2' about='mAGO NEGRO'>{name}</p>
        <figure><img src={!!!imageBase64 || !!!imageBase64.image ? cardDefault : 'data:image/jpeg;base64,' + imageBase64.image} alt="Shoes" /></figure>
        <ul className="list-none">
          <li>FORÇA: {attributes.FORCA}</li>
          <li>DESTREZA: {attributes.DESTREZA}</li>
          <li>VITALIDADE: {attributes.VITALIDADE}</li>
          <li>INTELIGENCIA: {attributes.INTELIGENCIA}</li>
        </ul>
      </div>
    </div>
  )

}