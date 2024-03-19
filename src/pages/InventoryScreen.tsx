import React, { useEffect, useState } from 'react';
import useCardService from '../services/ServiceCard';
import Card from '../shared/types/CardVO';
import { CardBox } from '../components/CardBox';
import { MenuProfile } from '../components/MenuProfile';
import { NavbarApp } from '../components/NavbarApp';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import IUserData from '../shared/types/ResponseUserData';
import useUserService from '../services/ServiceUser';
import { FooterCopyright } from '../components/FooterCopyright';
import { useNavigate } from 'react-router-dom';


type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    cardPopup: Card | undefined;
};

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, cardPopup }) => {

    if (!isOpen) {
        return null;
    }


    const classRarity = `card-frame-background ${getCardClass(cardPopup?.rarity)}`;

    function getCardClass(color: string | undefined): string {
        const colorMap: Record<string, string> = {
            'STANDARD': 'standard',
            'UNUSUAL': 'unusual',
            'LEGENDARY': 'legendary',
            'MITHY': 'mithy',
            'RARE': 'rare'
        };

        return colorMap[color!] || '';
    }

    function getNameRarity(desc: string | undefined): string {
        const rarityMap: Record<string, string> = {
            'STANDARD': 'NORMAL',
            'UNUSUAL': 'INCOMUM',
            'LEGENDARY': 'LENDÁRIA',
            'MITHY': 'MÍTICA',
            'RARE': 'RARA'
        };

        return rarityMap[desc!] || '';
    }

    const navigate = useNavigate()

    return (
        <><div
            className="fixed w-screen h-screen bg-base-100 bg-opacity-90 flex items-center justify-center z-10  "
            onClick={onClose}>
            {cardPopup?.status == "CREATED" ?

                <div className="h-full md:w-11/12 md:h-5/6 lg:w-7/12 lg:h-5/6 bg-base-300 rounded-lg shadow overflow-auto">
                    <div className='flex flex-col justify-center items-center p-6 '>
                        <>
                            <div className={`${classRarity} ${getCardClass(cardPopup?.rarity)} z-50 rounded-box`}>
                                <div className=' bg-transparent flex lg:flex-col justify-center items-center h-full w-full p-5'>

                                    <div className=' bg-transparent flex-col p-5 w-fit bg-base-100 rounded-box '>

                                        <div className='text-center pt-3'>
                                            <h2 className="text-xl font-bold">{cardPopup?.name}</h2>
                                        </div>
                                        <div className='flex justify-center items-center p-3'>
                                            <img className='w-52 rounded-box' src={!!!cardPopup || !!!cardPopup.image || !!!cardPopup.image.image ? 'cardDefault' : 'data:image/jpeg;base64,' + cardPopup.image.image} alt={cardPopup?.name} />
                                        </div>
                                        <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 gap-y-1 text-center text-sm py-4">
                                            <li>FORÇA: {cardPopup?.attributes.STRENGHT || cardPopup?.attributes.FORCA}</li>
                                            <li>DESTREZA: {cardPopup?.attributes.DEXTERITY || cardPopup?.attributes.DESTREZA}</li>
                                            <li>VITALIDADE: {cardPopup?.attributes.VITALITY || cardPopup?.attributes.VITALIDADE}</li>
                                            <li>INTELIGENCIA: {cardPopup?.attributes.INTELLIGENCE || cardPopup?.attributes.INTELIGENCIA}</li>
                                        </ul>
                                        <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 pt-2 text-sm text-center">
                                            <li><b>{getNameRarity(cardPopup?.rarity)}</b></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 gap-y-1 text-sm text-center">
                                <li><b>COLEÇÃO: {cardPopup?.collectionSeries}</b></li>
                            </ul>
                            <div className='lg:w-4/5 py-5'>
                                <p className="max-w-max">{cardPopup?.description}</p>
                            </div>
                        </>


                        <div className="w-full flex justify-center lg:w-4/5 ">
                            <button
                                onClick={onClose}
                                className="btn bg- w-3/5"
                            >
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                                </svg>
                                Fechar
                            </button>
                            <button
                                onClick={() => navigate("/share/" + cardPopup.cardHash)}
                                className="ml-4 btn bg-primary w-2/5"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.823.177L4.927 3.073a.25.25 0 00.177.427H7.25v5.75a.75.75 0 001.5 0V3.5h2.146a.25.25 0 00.177-.427L8.177.177a.25.25 0 00-.354 0zM3.75 6.5a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-6.5a.25.25 0 00-.25-.25h-1a.75.75 0 010-1.5h1c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25v-6.5C2 5.784 2.784 5 3.75 5h1a.75.75 0 110 1.5h-1z" />
                                </svg>
                                Compartilhar
                            </button>
                        </div>
                    </div>
                </div>
                :
                <p>Aguarde, sua carta está sendo criada</p>}
        </div></>
    );
};


export default Dialog;

export const InventoryScreen: React.FC<any> = () => {
    const authUser = useAuthUser<IUserData>()
    const [userData, setUserData] = useState<IUserData>()
    const isAuthenticated = useIsAuthenticated()
    const [cards, setCards] = useState<Card[]>()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [cardPopup, setCardPopup] = useState<Card>()
    const { getAllCardsByUser } = useCardService();
    const { getAllDataFromUser } = useUserService();

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleShowPopupCard = async (cardPopup: Card) => {
        setCardPopup(cardPopup);
        setIsDialogOpen(true);
    }
    useEffect(() => {
        console.log('verificando se usuario autenticado')
        if (isAuthenticated()) {
            console.log('carregando perfil do usuario')
            getAllDataFromUser(authUser!.userId)
                .then((response) => {
                    setUserData(response.data)
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                })
            console.log('listando cartas do usuario')
            getAllCardsByUser(authUser!.userId)
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
            <div className='h-screen lg:h-screen max-sm:h-lvh lg:flex lg:flex-col lg:overflow-auto'>
                <NavbarApp />
                <div className="flex flex-col lg:flex-row p-5 h-full">
                    <div className="p-5 lg:w-1/6 md:w-full flex h-full card bg-base-300 rounded-box justify-center items-center">
                        {userData != undefined ? <MenuProfile userData={userData} /> : ''}
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="p-5 w-full sm:p-10 md:p-5 card bg-base-200 rounded-box overflow-auto h-full">
                        <div className='flex w-full'>
                            <div className='top-20'>
                                <p className='pb-5 text-start font-bold text-xl subpixel-antialiased'> Deck ({!!cards ? cards.length : '0'})</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 md:gap-3 lg:gap-6 lg:grid-cols-6 md:grid-cols-4 sm:p-5 max-sm:h-screen overflow-auto">
                            {
                                !!cards ? cards.length > 0 ? cards.map((card) => (
                                    <CardBox
                                        card={card}
                                        onShowDialog={handleShowPopupCard}
                                    />
                                )) : <p>Você ainda não possui nenhuma carta</p> : <p>Problema ao carregar cartas. Tente novamente</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen bottom-0 bg-base-100 relative'>
                <FooterCopyright />
            </div></>
    )
}