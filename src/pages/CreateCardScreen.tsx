import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';
import cardimg from './../assets/maos.png';

export const CreateCardScreen: React.FC<any> = (props) => {

    return (

        <div className='bg-cover bg-fixed bg-center' style={{ backgroundImage: `url(${cardimg})` }}>
            <body className='flex h-screen min-h-screen '>
                <div className='m-auto'>
                    <CardCreateForm></CardCreateForm>
                </div>
            </body>
        </div>
    )
}