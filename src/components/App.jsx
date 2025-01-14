import { useEffect, useReducer } from 'react'
import StateScreen from './StateScreen'
import Error from './Error'


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
  }
}

function App () {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(data => data.json())
      .then(res => dispatch({ type: 'receive', payload: res }))
      .then(err => dispatch({ type: 'error' }))
  }, [])
  return (
    <>
      {status === 'ready' && <StateScreen />}
      {status === 'error' && <Error />}
    </>
  )
}

export default App
