import { QuestionAPI } from "../providers/ClientIntegradorAPI"

const getAllQuestions = QuestionAPI.get('/all')

export const QuestionService = {
    getAllQuestions
}