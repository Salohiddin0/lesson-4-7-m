import React from 'react'

const StartScreen = ({ numOfQuestions, dispatch }) => {
  console.log(numOfQuestions)

  return (
    <div className='start'>
      <h4>Welcome to our React Quiz</h4>
      <h3> Questions / {numOfQuestions}</h3>

      <button className='btn' onClick={() => dispatch({ type: 'start' })}>
        Start
      </button>
    </div>
  )
}

export default StartScreen
