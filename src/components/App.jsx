import { useEffect, useReducer } from 'react'
import Error from './Error'
import StartScreen from './StartScreen'
import MainContent from './MainContent'
import Header from './Header'
import '../index (2).css'

const initialState = {
  questions: [],
  status: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'receive':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'error':
      return { ...state, status: 'error' }
    default:
      return state
  }
}

function App () {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState)

  const numOfQuestions = questions?.length

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(data => data.json())
      .then(res => {
        console.log(res) // Ma'lumotni tekshirish
        dispatch({ type: 'receive', payload: res })
      })
      .catch(err => {
        console.error(err) // Xatoni tekshirish
        dispatch({ type: 'error' })
      })
  }, [])

  return (
    <>
      <div className='app'>
        <Header />
        <MainContent>
          {status === 'ready' && (
            <StartScreen numOfQuestions={numOfQuestions} />
          )}
          {status === 'error' && <Error />}
        </MainContent>
      </div>
    </>
  )
}

export default App
