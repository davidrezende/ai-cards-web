import React from 'react';
import cardDefault from '../assets/magonegro.png'
import Image from '../shared/types/ImageVO';
type ListProps = {
  name: string;
  imageBase64: Image;
};


export const CardBox: React.FC<ListProps> = ({name, imageBase64}) => {

  return (
    <div className=" flex items-center justify-center hover:scale-125 hover:bg-sky-700">
      <div className="p-4 rounded-lg border-solid border-2 border-sky-500 card shadow-xl w-full h-full ">
        <p className='font-bold truncate text-center' about='mAGO NEGRO'>{name}</p>
        <figure><img src={ !!!imageBase64 || !!!imageBase64.image ? cardDefault : 'data:image/jpeg;base64,'+imageBase64.image} alt="Shoes" /></figure>
      </div>
    </div>
  )

}