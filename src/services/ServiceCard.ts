import { Card } from "react-daisyui"
import { useCardAPI } from "../providers/ClientIntegradorAPI"
import IRequestCreateCardText from "../shared/types/RequestCreateCardText"
import IRequestCreateImage from "../shared/types/RequestCreateImage"
import IRequestUpdateCardName from "../shared/types/RequestUpdateCardName"

const useCardService = () => {
    const CardAPI = useCardAPI();
    const generateCardText = (requestCard: IRequestCreateCardText) => CardAPI.post('', requestCard)
    const generateCardImage = (requestImage: IRequestCreateImage) => CardAPI.patch('/image/prompt', requestImage)
    const updateCardName = (requestUpdateName: IRequestUpdateCardName) => CardAPI.patch('/name', requestUpdateName)
    const getAllCardsByUser = (userId: string) => CardAPI.get('/user/' + userId)
    const getCardByCardHash = (cardHash: string) => CardAPI.get('/' + cardHash)

    return {
        generateCardText,
        generateCardImage,
        updateCardName,
        getAllCardsByUser,
        getCardByCardHash
    }
}
export default useCardService;