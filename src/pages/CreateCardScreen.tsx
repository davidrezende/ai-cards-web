import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';

export const CreateCardScreen: React.FC<any> = (props) => {

    return (
        <div className='absolute w-full justify-center flex flex-col items-center'>
            <CardCreateForm />
        </div>
    )

}
