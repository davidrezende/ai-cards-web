import { useQuestionAPI } from "../providers/ClientIntegradorAPI"

const useQuestionService = () => {
    const QuestionAPI = useQuestionAPI();
    const getAllQuestions = () => QuestionAPI.get('/all')

    return {
        getAllQuestions
    }
}
export default useQuestionService;