import { useEffect, useReducer } from 'react'
import Error from './Error'
import StartScreen from './StartScreen'
import MainContent from './MainContent'
import Header from './Header'
import '../index (2).css'
import Questions from './Questions'
import Footer from './NextButton'
import Loader from './Loader'
import Progress from './Progress'
import FinishScreen from './FinishScreen'

const initialState = {
  index: 0,
  questions: [],
  status: 'loading',
  answer: null,
  points: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'receive':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'error':
      return { ...state, status: 'error' }
    case 'start':
      return { ...state, status: 'active' }
    case 'nextQuestion':
      const question = state.questions[state.index]

      return {
        ...state,
        index: state.index + 1,
        answer: null,
        points:
          state.answer === question.correctOption
            ? state.points + question.points
            : state.points
      }
    case 'newAnswer':
      return { ...state, answer: action.payload }
    case 'finished':
      return { ...state, status: 'finished' }
    case 'restart':
      return { ...initialState, question: state.questions, status: 'ready' }

    default:
      throw new Error('Something went wrong')
  }
}

function App () {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const numOfQuestions = questions?.length
  const maxPossiblePoints = questions.reduce(
    (calc, curr) => calc + curr.points,
    0
  )

  useEffect(() => {
    fetch('http://localhost:8080/questions')
      .then(data => data.json())
      .then(res => {
        console.log(res)
        dispatch({ type: 'receive', payload: res })
      })
      .catch(err => {
        console.error(err)
        dispatch({ type: 'error' })
      })
  }, [])

  return (
    <>
      <div className='app'>
        <Header />
        <MainContent>
          {status === 'loading' && <Loader />}
          {status === 'ready' && (
            <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
          )}
          {status === 'error' && <Error />}
          {status === 'active' && (
            <>
              <Progress
                maxPossiblePoints={maxPossiblePoints}
                points={points}
                numOfQuestions={numOfQuestions}
                index={index}
              />
              <Questions
                question={questions[index]}
                answer={answer}
                dispatch={dispatch}
              />
              <Footer
                dispatch={dispatch}
                index={index}
                numOfQuestions={numOfQuestions}
              />
            </>
          )}
          {status === 'finished' && (
            <FinishScreen
              dispatch={dispatch}
              maxPossiblePoints={maxPossiblePoints}
              points={points}
            />
          )}
        </MainContent>
      </div>
    </>
  )
}

export default App
