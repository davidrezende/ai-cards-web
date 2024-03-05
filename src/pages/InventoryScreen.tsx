import React, { useEffect, useState } from 'react';
import { CardService } from '../services/ServiceCard';
import Card from '../shared/types/CardVO';
import { CardBox } from '../components/CardBox';
import { MenuProfile } from '../components/MenuProfile';
import { NavbarApp } from '../components/NavbarApp';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import IUserData from '../shared/types/ResponseUserData';

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    cardPopup: Card | undefined;
};

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, cardPopup }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed w-screen h-screen bg-base-100 bg-opacity-90 flex items-center justify-center z-10 "
            onClick={onClose}>
            {
                cardPopup?.status == "CREATED" ?

                    <div className="relative h-full md:w-11/12 md:h-5/6 lg:w-7/12 lg:h-5/6 bg-base-300 rounded-lg shadow overflow-auto">
                        <div className='flex flex-col justify-center items-center p-6 '>
                            <>
                                <div className='card-frame-background z-50 rounded-box'>
                                    <div className=' flex lg:flex-col justify-center items-center h-full w-full p-5'>

                                        <div className='flex-col p-5 w-fit bg-base-100 rounded-box'>

                                            <div className='text-center pt-3'>
                                                <h2 className="text-xl font-bold">{cardPopup?.name}</h2>
                                            </div>
                                            <div className='flex justify-center items-center p-3'>
                                                <img className='w-52 rounded-box' src={!!!cardPopup || !!!cardPopup.image || !!!cardPopup.image.image ? 'cardDefault' : 'data:image/jpeg;base64,' + cardPopup.image.image} alt={cardPopup?.name} />
                                            </div>
                                            <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 gap-y-1 text-center text-sm py-4">
                                                <li>FORÇA: {cardPopup?.attributes.FORCA}</li>
                                                <li>DESTREZA: {cardPopup?.attributes.DESTREZA}</li>
                                                <li>VITALIDADE: {cardPopup?.attributes.VITALIDADE}</li>
                                                <li>INTELIGENCIA: {cardPopup?.attributes.INTELIGENCIA}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-4/5 py-5'>
                                    <p className="max-w-max">{cardPopup?.description}</p>
                                </div>
                            </>


                            <div className="w-full flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="btn bg-primary w-4/5"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <p>Aguarde, sua carta está sendo criada</p>}
        </div>
    );
};

export default Dialog;

export const InventoryScreen: React.FC<any> = () => {
    const authUser = useAuthUser<IUserData>()
    const isAuthenticated = useIsAuthenticated()
    const [cards, setCards] = useState<Card[]>()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [cardPopup, setCardPopup] = useState<Card>()

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleShowPopupCard = async (cardPopup: Card) => {
        setCardPopup(cardPopup);
        setIsDialogOpen(true);
    }
    useEffect(() => {
        console.log('listando cartas do usuario')
        if (isAuthenticated()) {
            console.log('listando cartas do usuario')
            CardService.getAllCardsByUser(authUser!.userId)
                .then((response) => {
                    setCards(response.data)
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }, [])

    return (
        <>
            <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} cardPopup={cardPopup} />
            <div className='h-screen w-screen lg:flex lg:flex-col lg:overflow-auto'>
                <NavbarApp />
                <div className="flex flex-col lg:flex-row p-5 h-full">
                    <div className="p-10 lg:w-2/6 md:w-full flex h-full card bg-base-300 rounded-box justify-center items-center">
                        <MenuProfile />
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="p-5 w-full sm:p-10 md:p-5 card bg-base-200 rounded-box overflow-auto h-full">

                        <p className='pb-5 text-start font-bold text-xl subpixel-antialiased'> Deck ({!!cards ? cards.length : '0'})</p>
                        <div className="lg:max-h-px grid grid-cols-2 gap-5 md:gap-3 lg:gap-6 lg:grid-cols-6 md:grid-cols-4 sm:p-5">
                            {
                                !!cards ? cards.map((card) => (
                                    <CardBox
                                        card={card}
                                        onShowDialog={handleShowPopupCard}
                                    />
                                )) : <p>Você ainda não possui nenhuma carta</p>
                            }
                        </div>
                    </div>
                </div>
            </div></>
    )
}