import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';

export const CreateCardScreen: React.FC<any> = () => {

    return (
        <div className='absolute w-full justify-center flex flex-col items-center'>
            <div className='w-screen h-screen '>
                <NavbarApp />
                <div className='pt-10 justify-center flex flex-col items-center'>
                    <CardCreateForm />
                </div>
                <div className='w-full fixed bottom-0'>
                    <FooterCopyright />
                </div>
            </div>
        </div>
    )

}
