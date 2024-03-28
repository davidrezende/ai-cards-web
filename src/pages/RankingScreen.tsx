import React, { useEffect, useState } from 'react';
import useCardService from '../services/ServiceCard';
import Card from '../shared/types/CardVO';
import { NavbarApp } from '../components/NavbarApp';
import { CardBox } from '../components/CardBox';
import Dialog from './InventoryScreen';
import { FooterCopyright } from '../components/FooterCopyright';

export const RankingScreen: React.FC<any> = () => {
    const [cards, setCards] = useState<Card[]>()
    const { findTop10Cards } = useCardService();
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
        findTop10Cards
            .then((response) => {
                setCards(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

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

    function changeRankingBgColor(index: number) {
        if (index == 1) return "bg-yellow-500 text-black";
        else if (index == 2) return "bg-gray-300 text-black";
        else if (index == 3) return "bg-yellow-800 text-black";
        else return ""

    }

    return (
        <>
            <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} cardPopup={cardPopup} />
            <div className=''>
                <NavbarApp />
                <div className='p-5 max-md:p-0'>
                    <div className='p-9 bg-base-300 bg-opacity-90 rounded-lg px-20 flex flex-col max-md:p-0 '>
                        <div className='p-16 flex flex-row justify-center items-center'>
                            <svg className="w-10 h-10" viewBox="0 -0.5 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="11.9141" y="15.4102" width="1.58679" height="5.59554" fill="url(#paint0_linear_103_1804)"></rect> <path d="M5.89393 3.5979H1C1 7.393 1.29104 9.57603 6.69821 9.57603" stroke="#FFDD66" stroke-width="2"></path> <path d="M19.8636 8.56848C19.8636 12.5379 16.6458 15.7557 12.6764 15.7557C8.70707 15.7557 5.48926 12.5379 5.48926 8.56848C5.48926 4.59911 8.70707 1.3813 12.6764 1.3813C16.6458 1.3813 19.8636 4.59911 19.8636 8.56848Z" fill="#FFDD66"></path> <path d="M12.6764 20.7262C9.74579 20.7262 7.37002 21.5833 7.37002 22.6406H17.9829C17.9829 21.5833 15.6071 20.7262 12.6764 20.7262Z" fill="#FFDD66"></path> <path d="M5.48926 0H19.8636V8.23263H5.48926V0Z" fill="#FFDD66"></path> <path d="M17.9829 23.01H7.37002V22.607H17.9829V23.01Z" fill="#FFDD66"></path> <path d="M19.6603 3.5979H24.5542C24.5542 7.393 24.2632 9.57603 18.856 9.57603" stroke="#DE9300" stroke-width="2"></path> <path d="M19.8634 8.56843C19.8634 12.5378 16.6456 15.7556 12.6762 15.7556C12.6762 15.7556 12.6762 12.5378 12.6762 8.56843C12.6762 4.59905 12.6762 1.38124 12.6762 1.38124C16.6456 1.38124 19.8634 4.59905 19.8634 8.56843Z" fill="url(#paint1_linear_103_1804)"></path> <path d="M12.6762 20.7262C12.6762 20.7262 12.6762 21.5833 12.6762 22.6405H17.9826C17.9826 21.5833 15.6069 20.7262 12.6762 20.7262Z" fill="url(#paint2_linear_103_1804)"></path> <path d="M12.6762 0.000488281H19.8634V8.23258H12.6762V0.000488281Z" fill="url(#paint3_linear_103_1804)"></path> <path d="M17.9826 23.01H12.6762C12.6762 23.01 12.6643 22.7639 12.6762 22.6069C12.8331 20.5406 17.9826 22.6069 17.9826 22.6069V23.01Z" fill="url(#paint4_linear_103_1804)"></path> <circle cx="12.8176" cy="7.76846" r="4.30105" fill="#DCAE0C"></circle> <circle cx="12.8088" cy="7.71544" r="3.12686" fill="#DE9300" stroke="#FFE176" stroke-width="4.55437"></circle> <path d="M12.8087 4.17944L13.8984 6.35885L16.0778 6.63128L14.5812 8.30942L14.9881 10.7177L12.8087 9.62796L10.6293 10.7177L11.0397 8.30942L9.53955 6.63128L11.719 6.35885L12.8087 4.17944Z" fill="#FFF4BC"></path> <path d="M13.2559 3.95584L12.8087 3.06141L12.3614 3.95584L11.3914 5.8959L9.47753 6.13514L8.53113 6.25344L9.16678 6.96451L10.5063 8.46298L10.1364 10.6337L9.97064 11.606L10.8529 11.1649L12.8087 10.187L14.7645 11.1649L15.6451 11.6052L15.4811 10.6344L15.1143 8.46295L16.4509 6.96406L17.0848 6.25327L16.1398 6.13514L14.2259 5.8959L13.2559 3.95584Z" stroke="#C98500" stroke-opacity="0.7"></path> <rect x="5" y="23" width="15" height="2" fill="#DE9300"></rect> <defs> <linearGradient id="paint0_linear_103_1804" x1="12.7075" y1="15.4102" x2="12.7075" y2="21.0057" gradientUnits="userSpaceOnUse"> <stop stop-color="#C07F00"></stop> <stop offset="1" stop-color="#DE9300"></stop> </linearGradient> <linearGradient id="paint1_linear_103_1804" x1="19.8139" y1="7.24836" x2="12.6085" y2="7.24836" gradientUnits="userSpaceOnUse"> <stop stop-color="#DE9300"></stop> <stop offset="1" stop-color="#FFBC11"></stop> </linearGradient> <linearGradient id="paint2_linear_103_1804" x1="19.8139" y1="7.24836" x2="12.6085" y2="7.24836" gradientUnits="userSpaceOnUse"> <stop stop-color="#DE9300"></stop> <stop offset="1" stop-color="#FFBC11"></stop> </linearGradient> <linearGradient id="paint3_linear_103_1804" x1="19.8139" y1="7.24836" x2="12.6085" y2="7.24836" gradientUnits="userSpaceOnUse"> <stop stop-color="#DE9300"></stop> <stop offset="1" stop-color="#FFBC11"></stop> </linearGradient> <linearGradient id="paint4_linear_103_1804" x1="19.8139" y1="7.24836" x2="12.6085" y2="7.24836" gradientUnits="userSpaceOnUse"> <stop stop-color="#DE9300"></stop> <stop offset="1" stop-color="#FFBC11"></stop> </linearGradient> </defs> </g></svg>
                            <h2 className='text-5xl text-center font-bold text-slate-200 px-5'>RANKING</h2>
                        </div>
                        <div className=''>
                            <div className="grid gap-8 sm:p-5 max-md:p-5">
                                {
                                    !!cards ? cards.length > 0 ? cards.map((card) => (
                                        <div className='bg-base-200 card shadow-xl flex max-md:flex-col flex-row'>
                                            <div className={changeRankingBgColor(cards.indexOf(card) + 1) + ' items-center min-[768px]:rounded-l-lg p-4 max-md:p-1.5 text-xl flex max-md:rounded-t-lg max-md:flex-col  '}>
                                                <a className='font-bold min-[768px]:text-center max-md:px-4'>{cards.indexOf(card) + 1} #</a>
                                            </div>
                                            <div className='flex flex-row py-5 max-md:flex-col max-sm:text-sm justify-center items-center '>
                                                <ul className='flex justify-center px-10 flex-col font-mono text-center '>
                                                    <li><a className='font-bold text-slate-200'>Criado por: </a></li>
                                                    <li>{card.userName}</li>
                                                    <li><a className='font-bold text-slate-200'>Data de Criação:</a> {formatDate(card.datCreation)}</li>
                                                </ul>
                                                <div className='w-3/12 max-md:w-5/12 max-md:py-5'>
                                                    <CardBox
                                                        card={card}
                                                        onShowDialog={handleShowPopupCard}
                                                    />
                                                </div>
                                                <div className='flex justify-center px-10 w-full flex-col font-mono max-sm:px-0'>
                                                    <ul className="grid max-md:grid-cols-2 grid-row max-md:grid-flow-row grid-flow-col gap-x-2 gap-y-1 text-center text-sm py-4">
                                                        <li className='font-bold text-lg max-md:text-sm'><a className='font-bold text-slate-200'>FORÇA:</a> {card?.attributes.STRENGHT}</li>
                                                        <li className='font-bold text-lg max-md:text-sm'><a className='font-bold text-slate-200'>DESTREZA:</a> {card?.attributes.DEXTERITY}</li>
                                                        <li className='font-bold text-lg max-md:text-sm'><a className='font-bold text-slate-200'>VITALIDADE:</a> {card?.attributes.VITALITY}</li>
                                                        <li className='font-bold text-lg max-md:text-sm'><a className='font-bold text-slate-200'>INTELIGENCIA:</a> {card?.attributes.INTELLIGENCE}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <p>Você ainda não possui nenhuma carta</p> : <p>Problema ao carregar cartas. Tente novamente</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <FooterCopyright />
            </div>
        </>
    )
}