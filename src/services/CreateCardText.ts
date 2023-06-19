import { CardAPI } from "../providers/ClientIntegradorAPI"
import IRequestCreateCardText from "../shared/types/RequestCreateCardText"

const generateCardText = (requestCard: IRequestCreateCardText) => CardAPI.post('/', requestCard)
const generateCardImage = (cardHash: string, prompt: string) => CardAPI.post('/'+cardHash+'/image/prompt', prompt)

export const CardService = {
    generateCardText,
    generateCardImage
}