import React from 'react';
import { CardBox } from '../components/CardBox';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';
import { MenuProfile } from '../components/MenuProfile';

export const InventoryScreen: React.FC<any> = (props) => {

    return (
        <>
            <div className='w-screen '>
                <NavbarApp />
                <div className="flex flex-col w-full lg:flex-row h-screen">
                    <div className="p-10 grid h-full card bg-base-300 rounded-box place-items-center">
                        <div className="p-12  flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                            <CardBox />
                        </div>
                        <MenuProfile />
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="p-10 flex-grow card bg-base-200  rounded-box ">
                        <p className='pb-5 text-start font-bold text-xl subpixel-antialiased'> Deck (30)</p>
                        <div className="divider divider-horizontal">
                        </div>
                        <div className='flex-col lg:flex-row place-items-center'>
                            <div className="max-h-px grid grid-cols-2 gap-4 lg:grid-cols-6 md:grid-cols-4">
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                                <div className="p-4 rounded-lg border-solid border-2 border-sky-500 flex items-center justify-center hover:scale-125 hover:bg-sky-700">
                                    <CardBox />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}