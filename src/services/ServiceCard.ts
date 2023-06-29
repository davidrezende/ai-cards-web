import { CardAPI } from "../providers/ClientIntegradorAPI"
import IRequestCreateCardText from "../shared/types/RequestCreateCardText"
import IRequestCreateImage from "../shared/types/RequestCreateImage"
import IRequestUpdateCardName from "../shared/types/RequestUpdateCardName"

const generateCardText = (requestCard: IRequestCreateCardText) => CardAPI.post('', requestCard)
const generateCardImage = (requestImage: IRequestCreateImage) => CardAPI.patch('/image/prompt', requestImage)
const updateCardName = (requestUpdateName: IRequestUpdateCardName) => CardAPI.patch('/name', requestUpdateName)

export const CardService = {
    generateCardText,
    generateCardImage,
    updateCardName
}