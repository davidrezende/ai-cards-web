import React from 'react';
import { Button, Card, Input } from 'react-daisyui';
import { CardService } from '../services/ServiceCard';
import { QuestionService } from '../services/ServiceQuestions'
import { useState, useEffect } from 'react';
import Question from '../shared/types/QuestionVO';
export const CardCreateForm: React.FC<any> = (props) => {

  const [qt, setQt] = useState<number>(0)
  const [questions, setQuestions] = useState<any[]>([''])
  const [answers, setAnswers] = useState<Question[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [change, setChange] = useState(true)
  const [imageAnswer, setImageAnswer] = useState<string>('')
  const [textResponse, setTextResponse] = useState<string>('')

  useEffect(() => {
    QuestionService.getAllQuestions.then((data) => setQuestions(data.data))
  }, [])

  function handleNextQuestion() {
    if (qt < 3 && answers.length == qt) {
      setAnswers(current => [...current, { questionId: questions[qt].questionId, answer: answer }])
      setAnswer('')
    } else if (qt < 3 && answers.length != qt) {
      const newState = answers.map((obj, index) => {
        console.log(index, obj)
        if (index == qt) return { ...obj, questionId: questions[qt].questionId, answer: answer }
        return obj
      })
      setAnswers(newState)
      setAnswer('')
    }
    if (qt === (questions.length - 1)) {
      console.log("criar descrição da carta")
      handleCreateCardText()
      setChange(!change)
    } else {
      setQt(qt + 1)
    }
  }

  function handlePreviousQuestion() {
    if (qt > 0) {
      setQt(qt - 1)
      setAnswer(answers[qt - 1].answer)
    }
  }

  const handleCreateCardText = async () => {
    console.log('gerando texto')
    await CardService.generateCardText(
      {
        "userId": "ee4f4544-efa0-4e7b-93f1-a67b3d9a140c",
        "questions": answers
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
      {change ?
        <div className='flex justify-center items-center'>
          <Card className='bg-base-300 p-10 bg-opacity-90 w-11/12'>
            <div className=''>
              <Card.Title className='animate-bounce font-extrabold text-xl font-mono boboca'>
                <p>{questions[qt].question}</p>
              </Card.Title>
            </div>
            <Card.Body className=''>
              <div className="flex w-full component-preview p-4 items-center justify-center font-sans">
                <Input
                  className='text-2xl btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                  onChange={e => setAnswer(e.target.value)}
                  value={answer}
                />
              </div>
              <Button
                className='btn-active font-bold text-2xl font-mono normal-case'
                dataTheme='light'
                onClick={handlePreviousQuestion}>Voltar Pergunta</Button>
              <Button
                className='btn-active font-bold text-2xl font-mono normal-case'
                dataTheme='light'
                onClick={handleNextQuestion}>Proxima Pergunta</Button>
            </Card.Body>
          </Card>
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
