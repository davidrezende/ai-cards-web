import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';

export const CreateCardScreen: React.FC<any> = (props) => {

    return (

        <div className='flex justify-center items-center w-screen'>
            <CardCreateForm />
        </div>
    )
}