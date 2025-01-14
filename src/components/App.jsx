import { useEffect, useReducer } from 'react'
import Error from './Error'
import StartScreen from './StartScreen'
import MainContent from './MainContent'
import Header from './Header'
import '../index (2).css'
import Questions from './Questions'

const initialState = {
  index: 0,
  questions: [],
  status: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'receive':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'error':
      return { ...state, status: 'error' }
    case 'start':
      return { ...state, status: 'active' }
    default:
      throw new Error('Something went wrong')
  }
}

function App () {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const numOfQuestions = questions?.length

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
          {status === 'ready' && (
            <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
          )}
          {status === 'error' && <Error />}
          {status === 'active' && <Questions question={questions[index]} />}
        </MainContent>
      </div>
    </>
  )
}

export default App
