import React from 'react';
import { Card } from 'react-daisyui';
import cardimg from './../assets/magonegro.png';
export const CardBox: React.FC<any> = (props) => {

  return (
    <div>
      <div className="mb-3">
        <Card className='bg-base-300 '>
          <Card.Title tag="h2" className='bg-base-100 bg-gray-900 bg-opacity-50 rounded-lg text-justify p-2'>
            <p>Mago Negro</p>
          </Card.Title>
          <Card.Image
            src={cardimg}
            alt="Shoes"
          />
          <Card.Body>
            <div className=''>
              <div className='bg-base-100 bg-gray-700 bg-opacity-50 rounded-lg text-justify p-2'>
                The ultimate wizard in terms of attack and defense.
              </div>
            </div>

          </Card.Body>
        </Card>
      </div>
    </div>
  )

}