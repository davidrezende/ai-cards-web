import React, { useEffect, useState } from 'react';
import { CardService } from '../services/ServiceCard';
import Card from '../shared/types/CardVO';
import { CardBox } from '../components/CardBox';
import { MenuProfile } from '../components/MenuProfile';
import { NavbarApp } from '../components/NavbarApp';

export const InventoryScreen: React.FC<any> = (props) => {
    const [cards, setCards] = useState<Card[]>()

    useEffect(() => {
        console.log('listando cartas do usuario')
        CardService.getAllCardsByuUser("ee4f4544-efa0-4e7b-93f1-a67b3d9a140c")
        .then((response) => {
            setCards(response.data)
            console.log('CARDS')
          console.log(cards)
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
        })
    }, [])

    return (
        <>
            <div className='w-screen '>
                <NavbarApp />
                <div className="flex flex-col w-full lg:flex-row h-screen">
                    <div className="p-10 grid h-full card bg-base-300 rounded-box place-items-center">
                        <MenuProfile />
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="p-10 flex-grow card bg-base-200  rounded-box ">
                        <p className='pb-5 text-start font-bold text-xl subpixel-antialiased'> Deck (30)</p>
                        <div className="divider divider-horizontal">
                        </div>
                        <div className='flex-col lg:flex-row place-items-center'>
                            <div className="max-h-px max-w-full grid grid-cols-2 gap-4 lg:grid-cols-6 md:grid-cols-4">
                            {
                                cards?.map((card) => (
                                    <CardBox
                                        name={card.name}
                                        imageBase64={ card.image }
                                    />
                                ) )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}