import { CardAPI } from "../providers/ClientIntegradorAPI"
import IRequestCreateCardText from "../shared/types/RequestCreateCardText"
import IRequestCreateImage from "../shared/types/RequestCreateImage"
import IRequestUpdateCardName from "../shared/types/RequestUpdateCardName"

const generateCardText = (requestCard: IRequestCreateCardText) => CardAPI.post('', requestCard)
const generateCardImage = (requestImage: IRequestCreateImage) => CardAPI.patch('/image/prompt', requestImage)
const updateCardName = (requestUpdateName: IRequestUpdateCardName) => CardAPI.patch('/name', requestUpdateName)
const getAllCardsByUser = (userId: string) => CardAPI.get('/user/'+ userId)

export const CardService = {
    generateCardText,
    generateCardImage,
    updateCardName,
    getAllCardsByUser
}