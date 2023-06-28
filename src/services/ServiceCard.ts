import { CardAPI } from "../providers/ClientIntegradorAPI"
import IRequestCreateCardText from "../shared/types/RequestCreateCardText"

const generateCardText = (requestCard: IRequestCreateCardText) => CardAPI.post('', requestCard)
const generateCardImage = (cardHash: string, prompt: string) => CardAPI.patch('/' + cardHash + '/image/prompt', {prompt})
const getAllCardsByUser = (userId: string) => CardAPI.get('/user/'+ userId)

export const CardService = {
    generateCardText,
    generateCardImage,
    getAllCardsByuUser
}