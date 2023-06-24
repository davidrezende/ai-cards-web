import React from 'react';
import { Button, Card, Input } from 'react-daisyui';
import { CardService } from '../services/ServiceCard';
import { QuestionService } from '../services/ServiceQuestions'
import { useState, useEffect } from 'react';
import IQuestionsRequest from '../shared/types/QuestionVO';
export const CardCreateForm: React.FC<any> = (props) => {

  const [qt, setQt] = useState<number>(0)
  const [questions, setQuestions] = useState<any[]>([''])
  const [questionsRequest, setQuestionsRequest] = useState<IQuestionsRequest[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [change, setChange] = useState(true)
  const [imageAnswer, setImageAnswer] = useState<string>('')
  const [textResponse, setTextResponse] = useState<string>('')

  useEffect(() => {
    QuestionService.getAllQuestions.then((data) => setQuestions(data.data))
  }, [])

  useEffect(() => {
    if (qt == 3) {
      console.log(questionsRequest)
      console.log("criar descrição da carta")
      handleCreateCardText()
      setChange(!change)
    }
  }, [qt])

  function handleNextQuestion() {
    // Está em uma pergunta nova? 
    if (qt < 3 && questionsRequest.length == qt) {
      setQuestionsRequest(current => [...current, { questionId: questions[qt].questionId, answer: answer }])
      setAnswer('')
      // Está em uma pergunta repetida?
    } else if (qt < 3 && questionsRequest.length != qt) {
      setQuestionsRequest(updateQuestions())

      /*  Se a próxima pergunta conter algo,
          define a resposta com a 'answer' da proxima pergunta.
          Se não, define a resposta como vazio.
      */
      questionsRequest[qt + 1] != undefined ? setAnswer(questionsRequest[qt + 1].answer) : setAnswer('')
    }
    setQt(qt + 1)
  }

  function handlePreviousQuestion() {
    if (qt > 0) {
      if (questionsRequest[qt] == undefined) {
        setQuestionsRequest(current => [...current, { questionId: questions[qt].questionId, answer: answer }])
      } else {
        setQuestionsRequest(updateQuestions())
      }
      setAnswer(questionsRequest[qt - 1].answer)
      setQt(qt - 1)
    }
  }

  function updateQuestions() {
    const newState = questionsRequest.map((obj, index) => {
      if (index == qt) return { ...obj, questionId: questions[qt].questionId, answer: answer }
      return obj
    })
    return newState
  }

  const handleCreateCardText = async () => {
    console.log('gerando texto')
    await CardService.generateCardText(
      {
        "userId": "ee4f4544-efa0-4e7b-93f1-a67b3d9a140c",
        "questions": questionsRequest
      }
    ).then((response) => {
      setTextResponse(response.data.cardHash)
      console.log("setando carhash")
      console.log(textResponse)
    }).catch((error) => {
      console.log(error)
    })
  };

  const handleCreateCardImage = async () => {
    console.log(textResponse)
    console.log("criando image")
    console.log(imageAnswer)
    await CardService.generateCardImage(
      textResponse, imageAnswer
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      {change && qt < 3 ?
        <div className='bg-base-300 p-10 bg-opacity-95 rounded-lg w-1/2 max-w-4xl'>
          <div className='animate-bounce font-extrabold text-base font-mono boboca text-center'>
            <p>{questions[qt].question}</p>
          </div>
          <div className='flex component-preview py-4 font-sans'>
            <Input
              className='text-2xl btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
              onChange={e => setAnswer(e.target.value)}
              value={answer}
            />
          </div>
          <div className='w-full items-center justify-center space-y-3'>
            {qt > 0 &&
              <button
                id='1'
                className='btn w-full text-white bg-primary btn-active font-bold text-2xl font-mono normal-case'
                onClick={handlePreviousQuestion}>Voltar Pergunta</button>}
            <button
              className='btn w-full text-white bg-primary btn-active font-bold text-2xl font-mono normal-case'
              onClick={handleNextQuestion}>Proxima Pergunta</button>
          </div>
        </div>
        :
        <div className='flex justify-center items-center'>
          <Card className='bg-base-300 p-10 bg-opacity-90 w-11/12'>
            <div className=''>
              <Card.Title className='animate-bounce font-extrabold text-xl font-mono boboca'>
                <p>Vamos criar a imagem da sua carta!</p>
              </Card.Title>
            </div>
            <Card.Body className=''>
              <div className="flex w-full component-preview p-4 items-center justify-center font-sans">
                <Input
                  className='text-2xl btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                  onChange={e => setImageAnswer(e.target.value)}
                  value={imageAnswer}
                />
              </div>
              <Button
                className='btn-active font-bold text-2xl font-mono normal-case'
                dataTheme='light'
                onClick={handleCreateCardImage}>Criar carta!</Button>
            </Card.Body>
          </Card>
        </div>
      }
    </>
  )

}

function delay(arg0: number) {
  throw new Error('Function not implemented.');
}
