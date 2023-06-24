import IQuestionsRequest from "./QuestionVO"

export default interface IRequestCreateCardText {
    userId: string
    questions: IQuestionsRequest[]
  }