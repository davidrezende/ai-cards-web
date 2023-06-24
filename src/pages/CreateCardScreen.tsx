import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';

export const CreateCardScreen: React.FC<any> = (props) => {

    return (

        <div className='h-screen w-screen flex justify-center items-center'>
            <CardCreateForm />
        </div>
    )
}