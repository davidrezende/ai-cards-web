import Question from "./QuestionVO"

export default interface IRequestCreateCardText {
    userId: string
    questions: Question[]
  }