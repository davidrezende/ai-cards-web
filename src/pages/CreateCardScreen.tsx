import React from 'react';
import { CardCreateForm } from '../components/CardCreateForm';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';

export const CreateCardScreen: React.FC<any> = () => {

    return (
        <div className='w-screen h-screen flex flex-col'>
            <NavbarApp />
            <div className='w-full h-full justify-center flex flex-col items-center'>
                <CardCreateForm />
            </div>
            <div className='w-screen bottom-0 bg-base-100'>
                <FooterCopyright />
            </div>
        </div>
    )

}
