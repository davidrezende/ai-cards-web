import React from 'react';
import { Card } from 'react-daisyui';
import cardimg from './../assets/magonegro.png';
export const CardBox: React.FC<any> = (props) => {

  return (
    <div className="card bg-base-100 shadow-xl w-28 h-28 ">
      {/* <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div> */}
      <figure><img src={cardimg} alt="Shoes" /></figure>
    </div>
  )

}