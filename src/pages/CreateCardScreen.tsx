import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';

export const CreateCardScreen: React.FC<any> = (props) => {

    return (

        <div className='flex'>
            <div className='m-auto'>
                <CardCreateForm />
            </div>
        </div>
    )
}