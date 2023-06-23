import React from 'react';
import { CardBox } from '../components/CardBox';
import { FooterCopyright } from '../components/FooterCopyright';
import { NavbarApp } from '../components/NavbarApp';

export const InventoryScreen: React.FC<any> = (props) => {

    return (
        <>
            <div className='w-screen '>
                <NavbarApp />
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
                        <div>
                            <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
                            <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
                            <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal">
                        OR
                    </div>
                    <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
                        <div className='flex-col lg:flex-row  bg-base-200'>
                            <div className="max-h-px grid grid-cols-2 bg-amber-300 gap-4 lg:grid-cols-6 md:grid-cols-4 ">
                                <div className="p-4 bg-cyan-400 flex items-center justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                                <div className="p-4 bg-cyan-400 flex items-center  justify-center">
                                    <CardBox />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>

                </div>
            </div></>
    )
}