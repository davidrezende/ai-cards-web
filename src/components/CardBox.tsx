import React from 'react';
import cardimg from './../assets/magonegro.png';
export const CardBox: React.FC<any> = (props) => {

  return (
    <div className="card shadow-xl w-28 h-28 ">
      <figure><img src={cardimg} alt="Shoes" /></figure>
    </div>
  )

}