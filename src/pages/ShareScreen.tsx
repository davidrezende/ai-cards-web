import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Input } from 'react-daisyui';
import IUserData from '../shared/types/ResponseUserData';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useUserService from '../services/ServiceUser';
import IUserModifyData from '../shared/types/RequestModifyUserData';
import usePasswordService from '../services/PasswordService';
import { NavbarApp } from '../components/NavbarApp';
import { useNavigate, useParams } from 'react-router-dom';
import useCardService from '../services/ServiceCard';
import Card from '../shared/types/CardVO';
import { CardBox } from '../components/CardBox';
import IUserSharedOwnerData from '../shared/types/ResponseUserSharedCard';


export const ShareScreen: React.FC<any> = () => {
    const { cardHash } = useParams<{ cardHash: string }>();

    const authUser = useAuthUser<IUserData>()
    const isAuthenticated = useIsAuthenticated()
    const { getCardByCardHash } = useCardService();
    const [cardShared, setCardShared] = useState<Card>();
    const [ownerCard, setOwnerCard] = useState<IUserSharedOwnerData>();
    const { getAllDataFromUser } = useUserService();
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        console.log('carregando carta do usuário')
        if (cardHash) {
            getCardByCardHash(cardHash)
                .then((response) => {
                    setCardShared(response.data)
                    handleGetDataFromUserOwnerCard(response.data.userId);
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }, [])


    const handleGetDataFromUserOwnerCard = (userId: string) => {
        getAllDataFromUser(userId)
            .then((response) => {
                setOwnerCard(response.data)
                console.log(response.data)

            }).catch((error) => {
                console.log(error)
            })
    };


    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);

        date.setUTCHours(date.getUTCHours() - 3);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = String(date.getUTCFullYear());
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    type DialogProps = {
        isOpen: boolean;
        onClose: () => void;
    };


    const Dialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
        if (!isOpen) {
            return null;
        }

        return (
            <div
                className="fixed w-screen h-screen bg-base-100 bg-opacity-90 flex items-center justify-center z-10  "
            >
                <div className='flex flex-col justify-center items-center p-6 '>
                    <>
                        <br />
                        <div className='p-20 bg-base-300 bg-opacity-90 rounded-lg '>
                            <p className="max-w-max text-lg">Poxa!<br/>
                            Notamos que você não está logado.<br/>
                            Cadastre-se para ver todos os detalhes da carta.</p>
                            <br/>
                            <div className="w-full m-2 justify-center ">
                                <br />
                                <button
                                    onClick={() => navigate('/register')}
                                    className="btn bg-primary w-4/5"
                                >
                                    Entrar
                                </button>
                                <button
                                    onClick={onClose}
                                    className="btn bg-primary w-4/5"
                                >
                                    Continuar
                                </button>
                            </div>

                        </div>
                    </>


                </div>

            </div>
        );
    };


    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleShowPopupCard = async (cardPopup: Card) => {
        setIsDialogOpen(true);
    }
    return (
        <>{!isAuthenticated() && <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} />}
            <div className='w-screen lg:fixed top-0'><NavbarApp /></div><div className='h-screen w-screen lg:flex lg:flex-col lg:overflow-auto'>

                <div className='absolute h-full w-full justify-center flex flex-col items-center'>
                    <div className='bg-base-300 p-9 bg-opacity-90 rounded-lg w-11/12 lg:w-1/2 md:w-2/3 max-w-4xl'>
                        <div className='text-center pt-3'>
                            <h2 className="text-xl">Carta de <b className="text-xl">{ownerCard?.name}</b> </h2>
                            <p className="text-sm">Criada em <b>{cardShared && formatDate(cardShared!.datCreation)}</b> </p>
                        </div>
                        <div className='animate-bounce font-extrabold text-base font-sans boboca text-center pt-4 lg:pb-3'>
                            <p className='lg:text-3xl md:text-3xl text-2xl'></p>
                        </div>

                        <div className='flex flex-col justify-center items-center p-6 '>
                            <>
                                {!isDialogOpen &&
                                    <div className='card-frame-background z-50 rounded-box '>
                                        <div className=' bg-transparent flex lg:flex-col justify-center items-center h-full w-full p-5'>

                                            <div className=' bg-transparent flex-col p-5 w-fit bg-base-100 rounded-box '>

                                                <div className='text-center pt-3'>
                                                    <h2 className="text-xl font-bold">{cardShared?.name}</h2>
                                                </div>
                                                <div className='flex justify-center items-center p-3'>
                                                    <img className='w-52 rounded-box' src={!!!cardShared || !!!cardShared.image || !!!cardShared.image.image ? 'cardDefault' : 'data:image/jpeg;base64,' + cardShared.image.image} alt={cardShared?.name} />
                                                </div>
                                                <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 gap-y-1 text-center text-sm py-4">
                                                    <li>FORÇA: {!isAuthenticated() ? '?' : cardShared?.attributes.STRENGHT || cardShared?.attributes.FORCA}</li>
                                                    <li>DESTREZA: {!isAuthenticated() ? '?' : cardShared?.attributes.DEXTERITY || cardShared?.attributes.DESTREZA}</li>
                                                    <li>VITALIDADE: {!isAuthenticated() ? '?' : cardShared?.attributes.VITALITY || cardShared?.attributes.VITALIDADE}</li>
                                                    <li>INTELIGENCIA: {!isAuthenticated() ? '?' : cardShared?.attributes.INTELLIGENCE || cardShared?.attributes.INTELIGENCIA}</li>
                                                </ul>
                                                <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 pt-2 text-sm text-center">
                                                    <li><b>{cardShared?.rarity}</b></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>}
                                <br />
                                <ul className="grid grid-rows-2 grid-flow-col w-full gap-x-2 gap-y-1 text-sm text-center">
                                    <li><b>COLEÇÃO: {cardShared?.collectionSeries}</b></li>
                                </ul>
                                <div className='lg:w-4/5 py-5'>
                                    <p className="max-w-max">{cardShared?.description}</p>
                                </div>
                            </>

                        </div>
                    </div>


                    <div className='inline-grid lg:grid-flow-col justify-stretch w-full items-center space-y-1 lg:space-y-0 lg:space-x-3'>
                    </div>
                </div>
            </div></>
    );
}

