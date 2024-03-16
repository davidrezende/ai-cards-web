import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Input } from 'react-daisyui';
import useCardService from '../services/ServiceCard';
import useQuestionService from '../services/ServiceQuestions'
import { useState, useEffect } from 'react';
import IQuestionsRequest from '../shared/types/QuestionVO';
import Loading from './QuestionLoading';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import IUserData from '../shared/types/ResponseUserData';

export const CardCreateForm: React.FC<any> = () => {

  const { generateCardText, generateCardImage, updateCardName } = useCardService();
  const { getAllQuestions } = useQuestionService();

  const authUser = useAuthUser<IUserData>()
  const isAuthenticated = useIsAuthenticated()
  const [showLoading, setShowLoading] = useState(true)
  const [qt, setQt] = useState<number>(0)
  const [questions, setQuestions] = useState<any[]>([''])
  const [questionsRequest, setQuestionsRequest] = useState<IQuestionsRequest[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [change, setChange] = useState<number>(0)
  const [imageAnswer, setImageAnswer] = useState<string>('')
  const [cardHashResponse, setCardHashResponse] = useState<string>('')
  const [steps, setSteps] = useState<number>(1)
  const [nameAnswer, setNameAnswer] = useState<string>('')
  const placeHolderEx: string[] = [
    "Um mago poderoso, sábio e bondoso.",
    "Um mundo medieval, assolado pelo rei das trevas.",
    "Derrotar o rei das trevas e salvar a humanidade."]
  const navigate = useNavigate()

  useEffect(() => {
    console.log('verificando se usuario autenticado para buscar questions da tela de criacao de carta')
    if(isAuthenticated()){
      getAllQuestions().then((data) => setQuestions(data.data))
    }
  }, [])

  useEffect(() => {
    if (qt == 3) {
      console.log(questionsRequest)
      console.log("criar descrição da carta")
      handleCreateCardText()
      setChange(change + 1)
    }
  }, [qt])

  function handleNextTextQuestion() {
    timeLoading()
    // Está em uma pergunta nova? 
    if (qt < 3 && questionsRequest.length == qt) {
      setQuestionsRequest(current => [...current, { questionId: questions[qt].questionId, answer: answer, numOrder: questions[qt].numOrder, }])
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

    if (steps > 0) {
      setSteps(steps + 1)
    }
  }

  function handlePreviousQuestion() {
    if (qt > 0) {
      timeLoading()
      if (questionsRequest[qt] == undefined) {
        setQuestionsRequest(current => [...current, { questionId: questions[qt].questionId, answer: answer, numOrder: questions[qt].numOrder}])
      } else {
        setQuestionsRequest(updateQuestions())
      }
      setAnswer(questionsRequest[qt - 1].answer)
      setQt(qt - 1)
      if (steps > 0) {
        setSteps(steps - 1)
      }
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
    if (isAuthenticated()) {
      console.log('pegando userId:'+ authUser?.userId)
      await generateCardText(
        {
          "userId": authUser?.userId!,
          "questions": questionsRequest
        }
      ).then((response) => {
        setCardHashResponse(response.data.cardHash)
        console.log("setando carhash")
        console.log(cardHashResponse)
      }).catch((error) => {
        console.log(error)
      })
    }
  };

  const handleCreateCardImage = async () => {
    console.log(cardHashResponse)
    console.log("criando image")
    console.log(imageAnswer)
    await generateCardImage(
      {
        "cardHash": cardHashResponse,
        "prompt": imageAnswer
      }
    ).then((response) => {
      setCardHashResponse(response.data.cardHash)
      console.log("setando carhash")
      console.log(cardHashResponse)
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleUpdateCardName = async () => {
    console.log("settando card name: " + nameAnswer)
    await updateCardName(
      {
        "cardHash": cardHashResponse,
        "name": nameAnswer
      }
    ).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  function timeLoading() {
    setTimeout(() => {
      setShowLoading(true)
    }, 1200)
    setShowLoading(false)
  }

  function handleImageOnClick() {
    timeLoading()
    setChange(change + 1)
    setSteps(steps + 1)
    handleCreateCardImage()
  }

  function handleNameOnClick() {
    timeLoading()
    handleUpdateCardName()
    navigate('/cards')
  }

  return (
    <>
      {showLoading &&
        <div className='inline-grid lg:grid-flow-col w-full lg:w-1/2 md:w-2/3 max-w-4xl text-white font-bold'>
          <ul className="steps pb-9 w-full">
            <li className="step step-secondary">Personalidade</li>
            <li className={`step ${steps >= 2 ? "step-secondary" : null}`}>Cenário</li>
            <li className={`step ${steps >= 3 ? "step-secondary" : null}`}>Trama</li>
          </ul>
          <ul className="steps pb-9 w-full">
            <li className={`step ${steps >= 4 ? "step-accent" : null}`} data-content="4">Imagem</li>
            <li className={`step ${steps >= 5 ? "step-accent" : null}`} data-content="5">Nome</li>
          </ul>
        </div>
      }
      {change == 0 ?
        <>
          <div className='bg-base-300 p-9 bg-opacity-90 rounded-lg w-11/12 lg:w-1/2 md:w-2/3 max-w-4xl'>
            {showLoading ?
              <>
                <div className='animate-bounce font-extrabold text-base font-sans boboca text-center pt-4 lg:pb-3'>
                  <p className='lg:text-3xl md:text-3xl text-2xl'>{questions[qt].question}</p>
                </div>
                <div className='flex component-preview py-4 font-sans'>
                  <Input
                    className='lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                    onChange={e => setAnswer(e.target.value)}
                    value={answer}
                    placeholder={placeHolderEx[qt]}
                  />
                </div>
                <div className='inline-grid lg:grid-flow-col justify-stretch w-full items-center space-y-1 lg:space-y-0 lg:space-x-3'>
                  {qt > 0 &&
                    <button
                      className='btn w-full text-base text-white bg-lime-500 btn-active font-bold lg:text-xl font-mono normal-case'
                      onClick={handlePreviousQuestion}>Voltar Pergunta</button>
                  }
                  <button
                    className='btn w-full text-base text-white bg-lime-500 btn-active font-bold lg:text-xl font-mono normal-case'
                    onClick={handleNextTextQuestion}>Próxima Pergunta</button>
                </div>
              </>
              : <Loading />}
          </div>
        </>
        : change == 1 ?
          <>
            <div className='bg-base-300 p-9 bg-opacity-95 rounded-lg w-11/12 lg:w-1/2 md:w-2/3 max-w-4xl'>
              {showLoading ?
                <>
                  <div className='animate-bounce font-extrabold text-base font-sans boboca text-center pt-4 lg:pb-3'>
                    <p className='lg:text-3xl md:text-3xl text-2xl'>Quais são as características físicas?</p>
                  </div>
                  <div className='flex component-preview py-4 font-sans'>
                    <Input
                      className='lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                      onChange={e => setImageAnswer(e.target.value)}
                      value={imageAnswer}
                      placeholder={"Mago, Loiro, Barbudo, Cabelos Longos, Cajado na mão."}
                    />
                  </div>
                  <div className='inline-grid lg:grid-flow-col justify-stretch w-full items-center space-y-1 lg:space-y-0 lg:space-x-3'>
                    <button
                      className='btn w-full text-base text-white bg-lime-500 btn-active font-bold lg:text-xl font-mono normal-case'
                      onClick={handleImageOnClick}>Criar Imagem da Carta</button>
                  </div>
                </>
                : <Loading />}
            </div>
          </>
          : change == 2 ?
            <>
              <div className='bg-base-300 p-9 bg-opacity-95 rounded-lg w-11/12 lg:w-1/2 md:w-2/3 max-w-4xl'>
                {showLoading ?
                  <>
                    <div className='animate-bounce font-extrabold text-base font-sans boboca text-center pt-4 lg:pb-3'>
                      <p className='lg:text-3xl md:text-3xl text-2xl'>Qual o nome da sua carta?</p>
                    </div>
                    <div className='flex component-preview py-4 font-sans'>
                      <Input
                        className='lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                        onChange={e => setNameAnswer(e.target.value)}
                        value={nameAnswer}
                        placeholder={"Pedro"}
                      />
                    </div>
                    <div className='inline-grid lg:grid-flow-col justify-stretch w-full items-center space-y-1 lg:space-y-0 lg:space-x-3'>
                      <button
                        className='btn w-full text-base text-white bg-lime-500 btn-active font-bold lg:text-2xl font-mono normal-case'
                        onClick={handleNameOnClick}>Finalizar!</button>
                    </div>
                  </>
                  : <Loading />}
              </div>
            </>
            : null
      }
    </>
  )

}
