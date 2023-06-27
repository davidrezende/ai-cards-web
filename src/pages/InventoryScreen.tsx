import React, { useEffect, useState } from 'react';
import { CardService } from '../services/ServiceCard';
import Card from '../shared/types/CardVO';
import { CardBox } from '../components/CardBox';
import { MenuProfile } from '../components/MenuProfile';
import { NavbarApp } from '../components/NavbarApp';


type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    cardPopup: Card | undefined;
};

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, cardPopup }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        // Lógica para lidar com o envio do formulário
        // Aqui você pode fazer algo com o valor inserido no campo de input
        console.log('Valor inserido:', inputValue);

        // Fechar o diálogo
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed w-screen h-screen bg-base-200 bg-opacity-70 flex items-center justify-center z-10 ">
            <div className="bg-base-300  rounded-lg p-52 shadow py-10 px-6 container justify-center">
                <h2 className="text-xl font-bold mb-4 ">{cardPopup?.name}</h2>
                {
                    cardPopup?.status == "CREATED" ?
                    <>
                    

                        <div className='flex justify-center items-center'>
                            <img className=' content-center' src={!!!cardPopup || !!!cardPopup.image || !!!cardPopup.image.image ? 'cardDefault' : 'data:image/jpeg;base64,' + cardPopup.image.image} alt={cardPopup?.name} />
                        </div>
                        <div className='flex justify-center items-center w-3/5 '>
                            <p className="mb-4 max-w-max">{cardPopup?.description}</p>
                        </div>
                        <ul className="list-none">
                            <li>FORÇA: {cardPopup?.attributes.FORCA}</li>
                            <li>DESTREZA: {cardPopup?.attributes.DESTREZA}</li>
                            <li>VITALIDADE: {cardPopup?.attributes.VITALIDADE}</li>
                            <li>INTELIGENCIA: {cardPopup?.attributes.INTELIGENCIA}</li>
                        </ul>

                    </>
                    :
                    <p>Aguarde, sua carta está sendo criada</p>

                }
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-400 text-gray-700 px-4 py-2 rounded"
                    >
                        Fechar
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dialog;

export const InventoryScreen: React.FC<any> = (props) => {
    const [cards, setCards] = useState<Card[]>()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [cardPopup, setCardPopup] = useState<Card>()

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleShowPopupCard = async (cardPopup: Card) => {
        setCardPopup(cardPopup);
        setIsDialogOpen(true);
    }

    useEffect(() => {
        console.log('listando cartas do usuario')
        CardService.getAllCardsByuUser("ee4f4544-efa0-4e7b-93f1-a67b3d9a140c")
            .then((response) => {
                setCards(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} cardPopup={cardPopup} />
            <div className='w-screen '>
                <NavbarApp />
                <div className="flex flex-col w-full lg:flex-row h-screen">
                    <div className="p-10 grid h-full card bg-base-300 rounded-box place-items-center">
                        <MenuProfile />
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="p-10 flex-grow card bg-base-200  rounded-box ">

                        <p className='pb-5 text-start font-bold text-xl subpixel-antialiased'> Deck ({!!cards ? cards.length : '0'})</p>
                        <div className="divider divider-horizontal">
                        </div>
                        <div className='flex-col lg:flex-row place-items-center'>

                            <div className="max-h-px max-w-full grid grid-cols-2 gap-6 lg:grid-cols-6 md:grid-cols-4">
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
                </div>
            </div></>
    )
}