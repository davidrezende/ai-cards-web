import React from 'react';
import { Card, Input } from 'react-daisyui';
export const CardCreateForm: React.FC<any> = (props) => {

  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Card className='bg-base-300 p-10'>
        <Card.Title className='animate-pulse font-extrabold text-xl font-mono normal-case'>
          Quais são as características físicas do seu peronsagem?
        </Card.Title>
        <Card.Body>
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Input className='btn-lg block w-full rounded-md border-0 py-1.5 text-white-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
          </div>
        </Card.Body>
        <Card.Actions>
          <div className="inline-flex content-center">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Prev
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Next
            </button>
          </div>
        </Card.Actions>
      </Card>
    </div>
  )

}